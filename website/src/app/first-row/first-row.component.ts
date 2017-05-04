import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-row',
  templateUrl: './first-row.component.html',
  styleUrls: ['./first-row.component.css']
})
export class FirstRowComponent implements OnInit {
  fadeValue = 0;

  constructor() {

    for (let i = 0; i < 8; i++) {
      this.fadeValue = this.fadeValue + 0.1;
    }
  }

  ngOnInit() {
  }

}
