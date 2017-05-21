import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-quicksort',
  templateUrl: './quicksort.component.html',
  styleUrls: ['./quicksort.component.css']
})
export class QuicksortComponent implements OnInit, AfterViewInit {
  sortText = "hidden";
  sorter = "hidden";

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
    this.wait(1000)
    this.sorter = "visible"
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

      this.wait(500);

      requestAnimationFrame(() => {
        this.tick();
      });

      this.restart = false;
    } else {
      if (this.sorted()) {
        ctx.fillStyle = '#7FFF00';

        for (let i = 0; i < 100; i++) {
          ctx.fillRect(width * i, 225 - this.heights[i], width, this.heights[i]);
        }

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

        // this.quickSort(0, this.heights.length - 1);

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

  partition ( l, h) {
    let x = this.heights[h];
    let i = (l - 1);

    for (let j = l; j <= h - 1; j++) {
      if (this.heights[j] <= x) {
        i++;
        // swap arr[i] and arr[j]
        this.swap(i, j);
        return i + 1;
      }
    }
    // swap arr[i+1] and arr[h]
    this.swap(i + 1, h);
    return (i + 1);
}

  quickSort(l, h) {
    // create auxiliary stack
    let stack = [];

    // initialize top of stack
    let top = -1;

    // push initial values in the stack
    stack[++top] = l;
    stack[++top] = h;

    // keep popping elements until stack is not empty
    while (top >= 0) {
      // pop h and l
      h = stack[top--];
      l = stack[top--];

      // set pivot element at it's proper position
      let p = this.partition(l, h);

      // If there are elements on left side of pivot,
      // then push left side to stack
      if ( (p - 1) > l ) {
        stack[++top] = l;
        stack[++top] = p - 1;
      }

      // If there are elements on right side of pivot,
      // then push right side to stack
      if ((p + 1) < h ) {
        stack[++top ] = p + 1;
        stack[ ++top ] = h;
      }
    }
}

  ngOnInit() {
  }
}
