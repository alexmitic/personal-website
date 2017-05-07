import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-quicksort',
  templateUrl: './quicksort.component.html',
  styleUrls: ['./quicksort.component.css']
})
export class QuicksortComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  heights: number[] = [60, 55, 50, 45, 40, 35, 30, 25, 20];

  constructor() {
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.tick();
  }
  tick() {
    let ctx = this.context;
    ctx.clearRect(0, 0, 350, 225);

    const width = 30;
    ctx.fillStyle = '#000';

    for (let i = 0; i <= this.heights.length; i++) {
      let j = i;

      while (j > 0 && this.heights[j - 1] > this.heights[j]) {
        const temp = this.heights[j];
        this.heights[j] = this.heights[j - 1];
        this.heights[j - 1] = temp;
        j = j - 1;
        break;
      }
    }

    const start = new Date().getTime(); 
    let end = start;
    while (end < start + 500) {
      end = new Date().getTime();
    }

    for (let i = 0; i < 7; i++) {
      ctx.fillRect(width * i, 225 - this.heights[i], width, this.heights[i]);
    }

    requestAnimationFrame(() => {
      this.tick();
    });

  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }


  sort() {
    // for (let i = 0; i <= this.list.length; i++) {
    //   let j = i;
    //
    //   while (j > 0 && this.list[j - 1] > this.list[j]) {
    //     const temp = this.list[j];
    //     this.list[j] = this.list[j - 1];
    //     this.list[j - 1] = temp;
    //     j = j - 1;
    //   }
    // }
  }
  ngOnInit() {
  }
}
