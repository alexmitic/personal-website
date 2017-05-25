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
      this.rewards[i][0] = -1;
    }

    for (let i = 90; i < 100; i++) {
      this.rewards[i][1] = -1;
    }

    for (let i = 0; i < 91; i += 10) {
      this.rewards[i][2] = -1;
    }

    for (let i = 9; i < 100; i += 10) {
      this.rewards[i][3] = -1;
    }

    this.qValues = [];

    for (let i = 0; i < 100; i++) {
      this.qValues[i] = [];
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
    ctx.fillStyle = 'black';
    ctx.fillRect(this.getXGridCoord(this.playerX), this.getYGridCoord(this.playerY), width, heigth);

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


  ngOnInit() {
  }

}
