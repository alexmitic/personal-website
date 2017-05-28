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

  illegalMoves: number[] = [78, 56, 57, 66, 71, 27];

  restart = true;

  learningRate = 0.9;
  discontFactor = 0.9;

  succses = 0;
  iter = 0;


  // Constrols: Up = 0, Down = 1, Left: 2, Right = 3
  constructor() {
    this.rewards = [];
    for (let i = 0; i < 100; i++) {
      this.rewards[i] = [];
    }

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 4; j++) {
        this.rewards[i][j] = -1;
      }
    }

    for (let i = 0; i < 10; i++) {
      this.rewards[i][0] = -1000;
    }

    for (let i = 90; i < 100; i++) {
      this.rewards[i][1] = -1000;
    }

    for (let i = 0; i < 91; i += 10) {
      this.rewards[i][2] = -1000;
    }

    for (let i = 9; i < 100; i += 10) {
      this.rewards[i][3] = -1000;
    }

    this.rewards[88][0] = 10;
    this.rewards[79][2] = 10;
    this.rewards[68][1] = 10;
    this.rewards[77][3] = 10;

    this.rewards[76][0] = -10;
    this.rewards[67][0] = -10;
    this.rewards[67][2] = -10;
    this.rewards[58][2] = -10;
    this.rewards[47][1] = -10;
    this.rewards[46][1] = -10;
    this.rewards[55][3] = -10;
    this.rewards[70][3] = -10;
    this.rewards[72][2] = -10;
    this.rewards[61][1] = -10;
    this.rewards[81][0] = -10;
    this.rewards[26][3] = -10;
    this.rewards[28][2] = -10;
    this.rewards[17][1] = -10;
    this.rewards[37][0] = -10;


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
    ctx.fillRect(this.getXGridCoord(1), this.getYGridCoord(7), width, heigth);
    ctx.fillRect(this.getXGridCoord(7), this.getYGridCoord(2), width, heigth);


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

      this.iter += 1;
    } else {
      if (this.currGrid === 78) {
        this.succses += 1;
      } else {
        for (let i = 0; i < this.illegalMoves.length; i++) {
          if (this.currGrid === this.illegalMoves[i]) {
            this.succses = 0;
            break;
          }
        }
      }

      if (this.checkIfValidMove(this.currGrid)) {
        const nextDirection = this.getNextDirection(this.currGrid);
        const nextGrid = this.currGrid + this.stepCorrection(nextDirection);

        // Update qValue
        this.qValues[this.currGrid][nextDirection] = this.qValues[this.currGrid][nextDirection] +
          (this.learningRate * (this.rewards[this.currGrid][nextDirection] +
          (this.discontFactor * this.getMaxVal(nextGrid)) +
          this.qValues[this.currGrid][nextDirection]));

        this.currGrid = nextGrid;
      } else {
        this.restart = !this.restart;
      }
    }

    if (this.succses === 10) {
      console.log(this.iter);
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
    let validDirr = [];
    switch (currGrid) {
      case 0: {
        validDirr.push(1);
        validDirr.push(3);
        break;
      }

      case 9: {
        validDirr.push(1);
        validDirr.push(2);
        break;
      }

      case 99: {
        validDirr.push(0);
        validDirr.push(2);
        break;
      }

      case 90: {
        validDirr.push(0);
        validDirr.push(3);
        break;
      }

      default: {
        if (currGrid < 10) {
          validDirr.push(1);
          validDirr.push(2);
          validDirr.push(3);
        } else if (currGrid > 89) {
          validDirr.push(0);
          validDirr.push(2);
          validDirr.push(3);
        } else {
          for (let i = 10; i < 91; i += 10) {
            if (currGrid === i) {
              validDirr.push(0);
              validDirr.push(1);
              validDirr.push(3);
              break;
            }
          }
          if (validDirr.length === 0) {
            for (let i = 19; i < 90; i += 10) {
              if (currGrid === i) {
                validDirr.push(0);
                validDirr.push(1);
                validDirr.push(2);
                break;
              }
            }
          }
          if (validDirr.length === 0) {
            validDirr.push(0);
            validDirr.push(1);
            validDirr.push(2);
            validDirr.push(3);
          }
        }
      }
    }

    const values = this.qValues[currGrid];
    const index = this.randomNum(validDirr.length - 1);
    let direction = validDirr[index];
    let max = values[validDirr[index]];

    for (let i = 0; i < validDirr.length; i++) {
      if (values[validDirr[i]] > max) {
        max = values[validDirr[i]];
        direction = validDirr[i];
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
        return false;
      }
    }

    if (currGrid < 0 || currGrid > 99) {
      return false;
    }

    return true;
  }

  setNegativReward(grid, illegalMoves) {
    // TODO make this work, its a good abstraction for later
    for (let i = 0; i < illegalMoves.length; i++) {
      this.rewards[grid][illegalMoves[i]] = -10;
    }
  }

  ngOnInit() {
  }

}
