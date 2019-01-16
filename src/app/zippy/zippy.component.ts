import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string = "title";
  isExpanded: boolean = false;

  onExpandCollapse() {
    this.isExpanded = !this.isExpanded;
  }

}
