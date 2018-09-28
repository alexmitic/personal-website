import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit, AfterViewInit {

  // TODO Randomize creation of walls so that there are different walls each refresh

  context: CanvasRenderingContext2D;
  @ViewChild('canvas') maze;

  // Colors
  readonly GOAL_COLOR: string;
  readonly PLAYER_COLOR: string;
  readonly WALL_COLOR: string;
  readonly DEFAULT_BOX_COLOR: string;

  // Dimensions
  readonly WIDTH: number;
  readonly HEIGHT: number;

  // States
  readonly GOAL_GRID: number;
  readonly REWARDS: number[][];

  // Directions
  readonly UP = 0;
  readonly DOWN = 1;
  readonly LEFT = 2;
  readonly RIGHT = 3;

  VALID_DIRECTIONS: number[][]; // Valid directions depends on the maze and is therefore not readonly

  qValues: number[][];

  //  States: |0|1|
  //          |2|3|

  // Game values
  currGrid: number;

  LEARNING_RATE: number; // Learning rate is not readonly as it changes during the game

  readonly DISCOUNT_FACTOR: number;

  success: number;

  // Controls: Up = 0, Down = 1, Left: 2, Right = 3
  constructor() {

    // Initiate game values
    this.currGrid = 0;
    this.success = 1;

    this.LEARNING_RATE = 1;
    this.DISCOUNT_FACTOR = 0.3;

    // Initiate colors
    this.GOAL_COLOR = 'green';
    this.PLAYER_COLOR = this.WALL_COLOR = 'black';
    this.DEFAULT_BOX_COLOR = 'white';

    // Initiate dimensions
    this.WIDTH = 25;
    this.HEIGHT = 25;

    // Initiate states
    this.GOAL_GRID = 22;

    // Set rewards
    this.REWARDS = [];
    this.setRewards();


    this.qValues = [];

    for (let i = 0; i < 48; i++) {
      this.qValues[i] = [];
    }

    for (let i = 0; i < 48; i++) {
      for (let j = 0; j < 4; j++) {
        this.qValues[i][j] = 0;
      }
    }

    // Initiate valid directions
    this.VALID_DIRECTIONS = [];

    for (let i = 0; i < 48; i++) {
      if (i === 0) { // Top left corner
        this.VALID_DIRECTIONS[i] = [this.DOWN, this.RIGHT];
      } else if (i === 7) { // Top right corner
        this.VALID_DIRECTIONS[i] = [this.DOWN, this.LEFT];
      } else if (i === 40) { // Bottom left corner
        this.VALID_DIRECTIONS[i] = [this.UP, this.RIGHT];
      } else if (i === 47) { // Bottom right corner
        this.VALID_DIRECTIONS[i] = [this.UP, this.LEFT];
      } else if (i < 8) { // Top row
        this.VALID_DIRECTIONS[i] = [this.DOWN, this.LEFT, this.RIGHT];
      } else if (i > 39) { // Bottom row
        this.VALID_DIRECTIONS[i] = [this.UP, this.LEFT, this.RIGHT];
      } else if (i % 8 === 0) { // Left wall
        this.VALID_DIRECTIONS[i] = [this.UP, this.DOWN, this.RIGHT];
      } else if (i % 7 === 0) { // Right wall
        this.VALID_DIRECTIONS[i] = [this.UP, this.DOWN, this.LEFT];
      } else {
        this.VALID_DIRECTIONS[i] = [this.UP, this.DOWN, this.LEFT, this.RIGHT];
      }
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const canvas = this.maze.nativeElement;
    this.context = canvas.getContext('2d');

    const ctx = this.context;

    // Initiate goal field
    ctx.fillStyle = this.GOAL_COLOR;

    ctx.fillRect(this.getXGridCord(this.GOAL_GRID), this.getYGridCord(this.GOAL_GRID), this.WIDTH, this.HEIGHT);

    this.randomizeWalls(3);

    console.log(this.VALID_DIRECTIONS);

    this.tick();
  }

  tick(): void {
    const ctx = this.context;

    let nextGrid: number;
    let reverseColor: string;

    if (this.currGrid === this.GOAL_GRID) {
      nextGrid = 0;
      reverseColor = this.GOAL_COLOR;
    } else {
      reverseColor = this.DEFAULT_BOX_COLOR;

      const nextDirection = this.getNextDirection();
      nextGrid = this.currGrid + this.stepCorrection(nextDirection);

      // Update qValue
      this.updateReward(nextDirection, nextGrid);
    }

    // Reverse color of current box
    this.fillRect(this.currGrid, reverseColor);

    // Set next gird to draw
    this.currGrid = nextGrid;

    // Draw player
    this.fillRect(this.currGrid, 'black');

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  updateReward(nextDirr, nextGrid): void {
    const r = this.REWARDS[this.currGrid][nextDirr];
    const max = this.getMaxVal(nextGrid);
    this.LEARNING_RATE = Math.pow(this.success, -0.1);

    this.qValues[this.currGrid][nextDirr] = this.qValues[this.currGrid][nextDirr] + this.LEARNING_RATE * (r + this.DISCOUNT_FACTOR * max + this.qValues[this.currGrid][nextDirr]);

    // this.qValues[this.currGrid][nextDirr] *= 1 - this.LEARNING_RATE;
    // this.qValues[this.currGrid][nextDirr] += this.LEARNING_RATE * (r + this.DISCOUNT_FACTOR * max);

  }

  getMaxVal(grid): number {
    const validDirr = this.VALID_DIRECTIONS[this.currGrid];

    const values = this.qValues[grid];
    let max = values[validDirr[0]];

    for (let i = 1; i < validDirr.length; i++) {
      if (values[validDirr[i]] > max) {
        max = values[i];
      }
    }
    return max;
  }

  addWall(grid: number): void {
    this.fillRect(grid, this.WALL_COLOR);

    if (grid - 8 >= 0) { // Remove access to wall from top
      const index = this.VALID_DIRECTIONS[grid - 8].indexOf(this.DOWN);
      if (index > -1) {
        this.VALID_DIRECTIONS[grid - 8].splice(index, 1);
      }
    }

    if (grid + 8 < 48) { // Remove access to wall from bottom
      const index = this.VALID_DIRECTIONS[grid + 8].indexOf(this.UP);
      if (index > -1) {
        this.VALID_DIRECTIONS[grid + 8].splice(index, 1);
      }
    }

    if (grid - 1 >= 0) { // Remove access to wall from left
      const index = this.VALID_DIRECTIONS[grid - 1].indexOf(this.RIGHT);
      if (index > -1) {
        this.VALID_DIRECTIONS[grid - 1].splice(index, 1);
      }
    }

    if (grid + 1 < 48) { // Remove access to wall from right
      const index = this.VALID_DIRECTIONS[grid + 1].indexOf(this.LEFT);
      if (index > -1) {
        this.VALID_DIRECTIONS[grid + 1].splice(index, 1);
      }
    }
  }

  setRewards(): void {
    for (let i = 0; i < 48; i++) {
      this.REWARDS[i] = [];
    }

    for (let i = 0; i < 48; i++) {
      for (let j = 0; j < 4; j++) {
        this.REWARDS[i][j] = -0.04;
      }
    }

    // Getting to goal

    if (this.GOAL_GRID - 8 >= 0) { // Reward for going down to goal
      this.REWARDS[this.GOAL_GRID - 8][this.DOWN] = 10;
    }

    if (this.GOAL_GRID + 8 < 48) { // Reward from going up to goal
      this.REWARDS[this.GOAL_GRID + 8][this.UP] = 10;
    }

    if (this.GOAL_GRID - 1 >= 0) { // Reward from going right to goal
      this.REWARDS[this.GOAL_GRID - 1][this.RIGHT] = 10;
    }

    if (this.GOAL_GRID + 1 < 48) { // Reward from going right to goal
      this.REWARDS[this.GOAL_GRID + 1][this.UP] = 10;
    }
  }

  randomizeWalls(numWalls): void {
    let grid: number;
    for (let i = 0; i < numWalls; i++) {
      grid = this.randomNum(49);
      while (grid < 7 || grid % 8 === 0 || grid % 7 === 0 || grid > 40 || grid === this.GOAL_GRID) {
        grid = this.randomNum(49);
      }
      this.addWall(grid);
    }
  }

  fillRect(grid: number, color: string): void {
    const ctx = this.context;
    ctx.fillStyle = color;

    ctx.fillRect(this.getXGridCord(grid), this.getYGridCord(grid), this.WIDTH, this.HEIGHT);
  }

  getXGridCord(grid: number): number {
    return this.gridToXpos(grid) * 25;
  }

  getYGridCord(grid: number): number {
    return this.gridToYpos(grid) * 25;
  }

  getNextDirection(): number {
    const validDirr = this.VALID_DIRECTIONS[this.currGrid];

    const values = this.qValues[this.currGrid];
    const index = this.randomNum(validDirr.length - 1);
    let direction = validDirr[index];
    let max = values[direction];

    for (let i = 0; i < validDirr.length; i++) {
      if (values[validDirr[i]] > max) {
        max = values[validDirr[i]];
        direction = validDirr[i];
      }
    }

    return direction;
  }

  gridToYpos(grid: number): number {
    let yPos = 0;
    for (let i = 8; i < 49; i += 8) {
      if (grid < i) {
        return yPos;
      }
      yPos += 1;
    }
  }

  gridToXpos(grid: number): number {
    return grid % 8;
  }

  stepCorrection(direction): number {
    if (direction === this.UP) {
      return -8;
    } else if (direction === this.DOWN) {
      return 8;
    } else if (direction === this.LEFT) {
      return -1;
    } else {
      return 1;
    }
  }

  randomNum(high): number {
    return Math.floor(Math.random() * (high + 1));
  }
}
