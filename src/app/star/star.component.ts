import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  isActive = false;

  constructor() { }

  ngOnInit() {
  }

  onMouseOver() {
    this.isActive = true;
  }

  onMouseOut() {
    this.isActive = false;
  }

}
