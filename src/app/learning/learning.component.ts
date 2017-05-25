import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  rewards: number[][];
  qValues: number[][];
  //  States: |0|1|
  //          |2|3|

  playerX = 0;
  playerY = 0;
  currGrid = 0;

  restart = true;

  // Constrols: Up = 0, Down = 1, Left: 2, Right = 3
  constructor() {
    this.rewards = [];
    for (let i = 0; i < 100; i++) {
      this.rewards[i] = [];
    }

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 4; j++) {
        this.rewards[i][j] = -0.04;
      }
    }

    for (let i = 0; i < 10; i++) {
      this.rewards[i][0] = -Infinity;
    }

    for (let i = 90; i < 100; i++) {
      this.rewards[i][1] = -Infinity;
    }

    for (let i = 0; i < 91; i += 10) {
      this.rewards[i][2] = -Infinity;
    }

    for (let i = 9; i < 100; i += 10) {
      this.rewards[i][3] = -Infinity;
    }

    this.rewards[88][0] = 1;
    this.rewards[79][2] = 1;
    this.rewards[68][1] = 1;
    this.rewards[77][3] = 1;

    this.rewards[76][0] = -1;
    this.rewards[67][0] = -1;
    this.rewards[67][2] = -1;
    this.rewards[58][2] = -1;
    this.rewards[47][1] = -1;
    this.rewards[46][1] = -1;
    this.rewards[55][3] = -1;
    this.rewards[56][3] = -1;

    this.qValues = [];

    for (let i = 0; i < 100; i++) {
      this.qValues[i] = [];
    }

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 4; j++) {
        this.qValues[i][j] = 0;
      }
    }
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.tick();
  }

  tick() {
    let ctx = this.context;
    const width = 25;
    const heigth = 25;
    ctx.clearRect(0, 0, 250, 250);

    // Initiate starting field
    ctx.fillStyle = 'green';
    ctx.fillRect(this.getXGridCoord(8), this.getYGridCoord(7), width, heigth);

    ctx.fillStyle = 'red';
    ctx.fillRect(this.getXGridCoord(6), this.getYGridCoord(5), width, heigth);
    ctx.fillRect(this.getXGridCoord(7), this.getYGridCoord(5), width, heigth);
    ctx.fillRect(this.getXGridCoord(6), this.getYGridCoord(6), width, heigth);

    // Initiate player
    this.playerY = this.gridToYpos(this.currGrid);
    this.playerX = this.gridToXpos(this.currGrid, this.playerY);

    ctx.fillStyle = 'black';
    ctx.fillRect(this.getXGridCoord(this.playerX), this.getYGridCoord(this.playerY), width, heigth);

    if (this.restart) {
      this.playerY = 0;
      this.playerX = 0;
      this.currGrid = 0;

      this.restart = !this.restart;
    } else {
      if (this.currGrid !== 78 && this.currGrid !== 56 && this.currGrid !== 57 && this.currGrid !== 66 && this.currGrid >= 0 && this.currGrid <= 99) {
        const nextDirection = this.getNextDirection(this.currGrid);
        const nextGrid = this.currGrid + this.stepCorrection(nextDirection);

        // Update qValue
        this.qValues[this.currGrid][nextDirection] = this.qValues[this.currGrid][nextDirection] +
          (1 * (this.rewards[this.currGrid][nextDirection] +
          (0.3 * this.getMaxVal(nextGrid)) +
          this.qValues[this.currGrid][nextDirection]));

        this.currGrid = nextGrid;
      } else {
        this.restart = !this.restart;
      }
    }

    requestAnimationFrame(() => {
      this.tick();
    });
  }

  getXGridCoord(x) {
    let xPos = 0;

    for (let i = 0; i < x; i++) {
      xPos = xPos + 25;
    }

    return xPos;
  }

  getYGridCoord(y) {
    let yPos = 0;

    for (let i = 0; i < y; i++) {
      yPos = yPos + 25;
    }

    return yPos;
  }

  getNextDirection(currGrid) {
    const values = this.qValues[currGrid];
    let direction = 0;
    let max = values[0];

    for (let i = 1; i < 4; i++) {
      if (values[i] > max) {
        max = values[i];
        direction = i;
      }
    }
    return direction;
  }

  getMaxVal(currGrid) {
    if (currGrid !== 78 && currGrid !== 56 && currGrid !== 57 && currGrid !== 66 && currGrid >= 0 && currGrid <= 99) {
      const values = this.qValues[currGrid];
      let max = values[0];

      for (let i = 1; i < 4; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
      return max;
    } else {
     return -1;
    }
  }

  stepCorrection(direction) {
    if (direction === 0) {
      return -10;
    } else if (direction === 1) {
      return 10;
    } else if (direction === 2) {
      return -1;
    } else {
      return 1;
    }
  }

  gridToYpos(currGrid) {
    let yPos = 0;
    for (let i = 10; i < 101; i += 10) {
      if (currGrid < i) {
        return yPos;
      }
      yPos += 1;
    }
  }

  gridToXpos(currGrid, yPos) {
    if (currGrid < 10) {
      return currGrid;
    } else {
      return currGrid % (yPos * 10);
    }
  }

  ngOnInit() {
  }

}
