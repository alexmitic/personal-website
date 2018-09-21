import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

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

  qValues: number[][];

  //  States: |0|1|
  //          |2|3|

  // Game values
  playerX: number;
  playerY: number;
  currGrid: number;

  LEARNING_RATE: number; // Learning rate is not readonly as it changes during the game

  readonly DISCOUNT_FACTOR: number;

  success: number;

  // Controls: Up = 0, Down = 1, Left: 2, Right = 3
  constructor() {

    // Initiate game values
    this.playerX = 0;
    this.playerY = 0;
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

    this.REWARDS = [];
    for (let i = 0; i < 48; i++) {
      this.REWARDS[i] = [];
    }

    for (let i = 0; i < 48; i++) {
      for (let j = 0; j < 4; j++) {
        this.REWARDS[i][j] = -0.04;
      }
    }

    // Getting to goal
    this.REWARDS[30][0] = 10;
    this.REWARDS[23][2] = 10;
    this.REWARDS[14][1] = 10;
    this.REWARDS[21][3] = 10;


    this.qValues = [];

    for (let i = 0; i < 48; i++) {
      this.qValues[i] = [];
    }

    for (let i = 0; i < 48; i++) {
      for (let j = 0; j < 4; j++) {
        this.qValues[i][j] = 0;
      }
    }
  }

  ngAfterViewInit(): void {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    const ctx = this.context;

    // Initiate goal field
    ctx.fillStyle = this.GOAL_COLOR;

    ctx.fillRect(this.getXGridCoord(6), this.getYGridCoord(2), this.WIDTH, this.HEIGHT);

    // Initiate walls
    ctx.fillStyle = this.WALL_COLOR;

    // // First row
    // ctx.fillCurrentRect(this.getXGridCoord(4), this.getYGridCoord(0), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(5), this.getYGridCoord(0), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(6), this.getYGridCoord(0), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(7), this.getYGridCoord(0), this.WIDTH, this.HEIGHT);
//
    // // Second row
    // ctx.fillCurrentRect(this.getXGridCoord(4), this.getYGridCoord(1), this.WIDTH, this.HEIGHT);
//
    // // Third row
    // ctx.fillCurrentRect(this.getXGridCoord(0), this.getYGridCoord(2), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(1), this.getYGridCoord(2), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(4), this.getYGridCoord(2), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(4), this.getYGridCoord(2), this.WIDTH, this.HEIGHT);
//
    // // Fourth row
    // ctx.fillCurrentRect(this.getXGridCoord(1), this.getYGridCoord(3), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(4), this.getYGridCoord(3), this.WIDTH, this.HEIGHT);
//
    // // Fifth row
    // ctx.fillCurrentRect(this.getXGridCoord(1), this.getYGridCoord(4), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(2), this.getYGridCoord(4), this.WIDTH, this.HEIGHT);
    // ctx.fillCurrentRect(this.getXGridCoord(4), this.getYGridCoord(4), this.WIDTH, this.HEIGHT);


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
    this.fillCurrentRect(reverseColor);

    // Set next gird to draw
    this.currGrid = nextGrid;
    this.playerX = this.gridToXpos();
    this.playerY = this.gridToYpos();

    // Draw player
    this.fillCurrentRect('black');

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  getXGridCoord(x): number {
    let xPos = 0;

    for (let i = 0; i < x; i++) {
      xPos = xPos + 25;
    }

    return xPos;
  }

  getYGridCoord(y): number {
    let yPos = 0;

    for (let i = 0; i < y; i++) {
      yPos = yPos + 25;
    }

    return yPos;
  }

  getNextDirection(): number {
    const validDirr = this.getVaildDirr();

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

  getMaxVal(currGrid): number {
    const validDirr = this.getVaildDirr();

    const values = this.qValues[currGrid];
    let max = values[validDirr[0]];

    for (let i = 1; i < validDirr.length; i++) {
      if (values[validDirr[i]] > max) {
        max = values[i];
      }
    }
    return max;
  }

  stepCorrection(direction): number {
    if (direction === 0) {
      return -8;
    } else if (direction === 1) {
      return 8;
    } else if (direction === 2) {
      return -1;
    } else {
      return 1;
    }
  }

  gridToYpos(): number {
    let yPos = 0;
    for (let i = 8; i < 49; i += 8) {
      if (this.currGrid < i) {
        return yPos;
      }
      yPos += 1;
    }
  }

  gridToXpos(): number {
    return this.currGrid % 8;
  }

  wait(ms): void {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  randomNum(high): number {
    return Math.floor(Math.random() * (high + 1));
  }

  updateReward(nextDirr, nextGrid): void {
    const r = this.REWARDS[this.currGrid][nextDirr];
    const max = this.getMaxVal(nextGrid);
    this.LEARNING_RATE = Math.pow(this.success, -0.1);

    this.qValues[this.currGrid][nextDirr] = this.qValues[this.currGrid][nextDirr] + this.LEARNING_RATE * (r + this.DISCOUNT_FACTOR * max + this.qValues[this.currGrid][nextDirr]);

    // this.qValues[this.currGrid][nextDirr] *= 1 - this.LEARNING_RATE;
    // this.qValues[this.currGrid][nextDirr] += this.LEARNING_RATE * (r + this.DISCOUNT_FACTOR * max);

  }

  // TODO This method works in a stupid way
  getVaildDirr(): any[] {
    const validDirr = [];
    switch (this.currGrid) {
      case 0: {
        validDirr.push(1);
        validDirr.push(3);
        break;
      }

      case 7: {
        validDirr.push(1);
        validDirr.push(2);
        break;
      }

      case 40: {
        validDirr.push(0);
        validDirr.push(3);
        break;
      }

      case 47: {
        validDirr.push(0);
        validDirr.push(2);
        break;
      }

      // case 3: {
      //   validDirr.push(1);
      //   validDirr.push(2);
      //   break;
      // }
      //
      // case 8: {
      //   validDirr.push(0);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 9: {
      //   validDirr.push(0);
      //   validDirr.push(2);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 11: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(2);
      //   break;
      // }
      //
      // case 13: {
      //   validDirr.push(1);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 14: {
      //   validDirr.push(1);
      //   validDirr.push(2);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 15: {
      //   validDirr.push(1);
      //   validDirr.push(2);
      //   break;
      // }
      //
      // case 18: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 19: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(2);
      //   break;
      // }
      //
      // case 21: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 24: {
      //   validDirr.push(1);
      //   break;
      // }
      //
      // case 26: {
      //   validDirr.push(0);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 27: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(2);
      //   break;
      // }
      //
      // case 29: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(3);
      //   break;
      // }
      //
      // case 32: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   break;
      // }
      //
      // case 35: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   break;
      // }
      //
      // case 37: {
      //   validDirr.push(0);
      //   validDirr.push(1);
      //   validDirr.push(3);
      //   break;
      // }

      default: {
        if (this.currGrid < 8) {
          validDirr.push(1);
          validDirr.push(2);
          validDirr.push(3);
        } else if (this.currGrid > 39) {
            validDirr.push(0);
            validDirr.push(2);
            validDirr.push(3);
        } else if (this.currGrid % 8 === 0) {
            validDirr.push(0);
            validDirr.push(1);
            validDirr.push(3);
        } else if (this.currGrid % 7 === 0) {
            validDirr.push(0);
            validDirr.push(1);
            validDirr.push(2);
        } else {
          validDirr.push(0);
          validDirr.push(1);
          validDirr.push(2);
          validDirr.push(3);
        }
      }
    }

    return validDirr;
  }

  fillCurrentRect(color: string): void {
    const ctx = this.context;
    ctx.fillStyle = color;

    ctx.fillRect(this.getXGridCoord(this.playerX), this.getYGridCoord(this.playerY), this.WIDTH, this.HEIGHT);
  }

  ngOnInit(): void {
  }
}
