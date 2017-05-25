import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  constructor() { }

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
    ctx.fillStyle = 'green';
    ctx.fillRect(this.getXGrid(8), this.getYGrid(7), 25, 25);

    ctx.fillStyle = 'red';
    ctx.fillRect(this.getXGrid(6), this.getYGrid(5), 25, 25);
    ctx.fillRect(this.getXGrid(7), this.getYGrid(5), 25, 25);
    ctx.fillRect(this.getXGrid(6), this.getYGrid(6), 25, 25);
  }

  getXGrid(x) {
    let xPos = 0;

    for (let i = 0; i < x; i++) {
      xPos = xPos + 25;
    }

    return xPos;
  }

  getYGrid(y) {
    let yPos = 0;

    for (let i = 0; i < y; i++) {
      yPos = yPos + 25;
    }

    return yPos;
  }


  ngOnInit() {
  }

}
