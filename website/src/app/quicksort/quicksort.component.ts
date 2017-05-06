import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quicksort',
  templateUrl: './quicksort.component.html',
  styleUrls: ['./quicksort.component.css']
})
export class QuicksortComponent implements OnInit {
  list: number[] = [this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt()
    , this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt()];

  constructor() {

    /*
      setTimeout(function(){
        let staples = [document.getElementById('staple0'), document.getElementById('staple1'),
          document.getElementById('staple2'), document.getElementById('staple3'),
          document.getElementById('staple4'), document.getElementById('staple5'),
          document.getElementById('staple6'), document.getElementById('staple7'),
          document.getElementById('staple8'), document.getElementById('staple9')];


        for (let i = 0; i <= staples.length; i++) {

          let j = i;
          while (j > 0 && staples[j - 1].style.marginTop < staples[j].style.marginTop) {

            const tempMar = staples[j].style.marginTop;
            const tempHeight = staples[j].style.height;

            staples[j].style.marginTop = staples[j - 1].style.marginTop.valueOf();
            staples[j].style.height = staples[j - 1].style.height.valueOf();

            staples[j - 1].style.marginTop = tempMar.valueOf();
            staples[j - 1].style.height = tempHeight.valueOf();

            j = j - 1;
          }
        }
      }, 0);
     */
  }

  randomInt() {
    return Math.floor(Math.random() * (28 - 3 + 1) + 3);
  }

  wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  sort() {
    for (let i = 0; i <= this.list.length; i++) {
      let j = i;

      while (j > 0 && this.list[j - 1] > this.list[j]) {
        const temp = this.list[j];
        this.list[j] = this.list[j - 1];
        this.list[j - 1] = temp;
        j = j - 1;
      }
    }
  }
  ngOnInit() {
  }
}
