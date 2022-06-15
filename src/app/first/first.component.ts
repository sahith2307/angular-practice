import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, OnDestroy {
  intervel: any;
  constructor() {}
  getName: string | number = '';
  number = 0;

  getWhatever = (a: number, b: number) => {
    if (a > b) {
      return a + b;
    } else {
      return a ** 3;
    }
  };
  ngOnInit(): void {
    this.intervel = setInterval(() => {
      this.getName = this.number;
      this.number += 1;
      if (this.number >= 11) {
        clearInterval(this.intervel);
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.number >= 11) {
      if (this.intervel) {
        clearInterval(this.intervel);
      }
    }
  }
}
