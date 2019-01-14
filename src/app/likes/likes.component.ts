import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

export interface LikeChangedEvent {
  liked: boolean;
}

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number = 0;
  @Output('likeChanged') likeChanged = new EventEmitter<LikeChangedEvent>();

  isMouseOver: boolean;

  onClick() {
    // this.isActive = !this.isActive;
    // this.likesCount += this.isActive ? 1 : -1;
    console.log('onClick');
    this.likeChanged.emit({liked: !this.isActive});
  }

  onMouseOver() {
    console.log('onMouseOver');
    this.isMouseOver = true;
  }

  onMouseOut() {
    console.log('onMouseOut');
    this.isMouseOver = false;
  }

}
