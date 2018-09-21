import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  width: number;
  heigth: number;

  rewards: number[][];
  qValues: number[][];
  //  States: |0|1|
  //          |2|3|

  playerX = 0;
  playerY = 0;
  currGrid = 0;

  illegalMoves: number[] = [];

  restart = true;

  learningRate = 1;
  discontFactor = 0.3;

  success = 1;

  // Constrols: Up = 0, Down = 1, Left: 2, Right = 3
  constructor() {

    this.width = 25;
    this.heigth = 25;

    this.rewards = [];
    for (let i = 0; i < 48; i++) {
      this.rewards[i] = [];
    }

    for (let i = 0; i < 48; i++) {
      for (let j = 0; j < 4; j++) {
        this.rewards[i][j] = -0.04;
      }
    }

    // Getting to goal
    this.rewards[30][0] = 10;
    this.rewards[23][2] = 10;
    this.rewards[14][1] = 10;
    this.rewards[21][3] = 10;


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

  ngAfterViewInit() {
    const canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    const ctx = this.context;

    // Initiate goal field
    ctx.fillStyle = 'green';

    ctx.fillRect(this.getXGridCoord(6), this.getYGridCoord(2), this.width, this.heigth);

    // Initiate walls
    ctx.fillStyle = 'black';

    // First row
    ctx.fillRect(this.getXGridCoord(4), this.getYGridCoord(0), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(5), this.getYGridCoord(0), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(6), this.getYGridCoord(0), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(7), this.getYGridCoord(0), this.width, this.heigth);

    // Second row
    ctx.fillRect(this.getXGridCoord(4), this.getYGridCoord(1), this.width, this.heigth);

    // Third row
    ctx.fillRect(this.getXGridCoord(0), this.getYGridCoord(2), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(1), this.getYGridCoord(2), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(4), this.getYGridCoord(2), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(4), this.getYGridCoord(2), this.width, this.heigth);

    // Fourth row
    ctx.fillRect(this.getXGridCoord(1), this.getYGridCoord(3), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(4), this.getYGridCoord(3), this.width, this.heigth);

    // Fifth row
    ctx.fillRect(this.getXGridCoord(1), this.getYGridCoord(4), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(2), this.getYGridCoord(4), this.width, this.heigth);
    ctx.fillRect(this.getXGridCoord(4), this.getYGridCoord(4), this.width, this.heigth);


    // this.tick();
  }

  tick() {
    if (this.restart) {
      this.playerY = 0;
      this.playerX = 0;
      this.currGrid = 0;

      this.restart = !this.restart;
    } else if (this.currGrid === 22) {
        this.restart = true;
        this.success += 1;
    } else {
        const nextDirection = this.getNextDirection();
        const nextGrid = this.currGrid + this.stepCorrection(nextDirection);

        // Update qValue
        this.updateReward(nextDirection, nextGrid);

        this.currGrid = nextGrid;
    }

    let ctx = this.context;

    ctx.clearRect(0, 0, 200, 150);

    // Draw player
    this.playerY = this.gridToYpos(this.currGrid);

    this.playerX = this.gridToXpos(this.currGrid, this.playerY);
    ctx.fillStyle = 'black';

    ctx.fillRect(this.getXGridCoord(this.playerX), this.getYGridCoord(this.playerY), this.width, this.heigth);

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

  getNextDirection() {
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

  getMaxVal(currGrid) {
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

  stepCorrection(direction) {
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

  gridToYpos(currGrid) {
    let yPos = 0;
    for (let i = 8; i < 49; i += 8) {
      if (currGrid < i) {
        return yPos;
      }
      yPos += 1;
    }
  }

  gridToXpos(currGrid, yPos) {
    if (currGrid < 8) {
      return currGrid;
    } else {
      return currGrid % (yPos * 8);
    }
  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  randomNum(high) {
    return Math.floor(Math.random() * (high + 1));
  }

  checkIfValidMove(currGrid) {
    for (let i = 0; i < this.illegalMoves.length; i++) {
      if (this.illegalMoves[i] === currGrid) {
        return true;
      }
    }

    return false;
  }

  updateReward(nextDirr, nextGrid) {
    const r = this.rewards[this.currGrid][nextDirr];
    const max = this.getMaxVal(nextGrid);
    this.learningRate = Math.pow(this.success, -0.1);

    this.qValues[this.currGrid][nextDirr] = this.qValues[this.currGrid][nextDirr] + this.learningRate * (r + this.discontFactor * max + this.qValues[this.currGrid][nextDirr]);

    // this.qValues[this.currGrid][nextDirr] *= 1 - this.learningRate;
    // this.qValues[this.currGrid][nextDirr] += this.learningRate * (r + this.discontFactor * max);

  }

  getVaildDirr() {
    let validDirr = [];
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

  ngOnInit() {
  }

}
