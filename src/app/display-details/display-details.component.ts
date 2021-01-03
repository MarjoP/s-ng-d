import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<app-display-details>',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
 
  pIsHidden =true;
  loki = [];
  countPresses =0;
  styleNo2;

  constructor() {
   }

  ngOnInit(): void {
  }

  displayDetails() {
    this.pIsHidden = !this.pIsHidden;
    this.countPresses++;
    this.loki.push(this.countPresses);
  }

}
