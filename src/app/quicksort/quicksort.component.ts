import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-quicksort',
  templateUrl: './quicksort.component.html',
  styleUrls: ['./quicksort.component.css']
})
export class QuicksortComponent implements OnInit, AfterViewInit {
  context: CanvasRenderingContext2D;
  @ViewChild('myCanvas') myCanvas;

  heights: number[] = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                       2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                       1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  restart = true;


  constructor() {

  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext('2d');

    this.tick();
  }

  tick() {
    let ctx = this.context;
    ctx.clearRect(0, 0, 300, 225);
    const width = 3;
    ctx.fillStyle = '#000';

    if (this.restart) {
      this.randomHeights();
      for (let i = 0; i < 100; i++) {
        ctx.fillRect(width * i, 225 - this.heights[i], width, this.heights[i]);
      }

      requestAnimationFrame(() => {
        this.tick();
      });

      this.restart = false;
    } else {
      if (this.sorted()) {
        // ctx.fillStyle = '#7FFF00';
        //
        // for (let i = 0; i < 100; i++) {
        //   ctx.fillCurrentRect(width * i, 225 - this.heights[i], width, this.heights[i]);
        // }

        this.restart = true;

        requestAnimationFrame(() => {
          this.tick();
        });

      } else {

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

        for (let i = 0; i < 100; i++) {
          ctx.fillRect(width * i, 225 - this.heights[i], width, this.heights[i]);
        }

        this.wait(55);

        requestAnimationFrame(() => {
          this.tick();
        });
      }
    }
  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  randomHeights() {
    for (let i = 0; i < 100; i++) {
      this.heights[i] = this.randomNum();
    }
  }

  randomNum() {
    return Math.floor(Math.random() * (225 - 15 + 1) + 15);
  }

  sorted() {
    for (let i = 0; i < 99; i++) {
      if (!(this.heights[i] <= this.heights[i + 1])) {
        return false;
      }
    }
    return true;
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heights[firstIndex];
    this.heights[firstIndex] = this.heights[secondIndex];
    this.heights[secondIndex] = temp;
  }

  ngOnInit() {
  }
}
