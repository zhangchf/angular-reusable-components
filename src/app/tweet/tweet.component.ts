import { LikeChangedEvent } from './../likes/likes.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  tweet: string = "Hello, I'm a new tweet.";
  liked: boolean;
  likesCount: number = 100;

  onLikeChanged($event: LikeChangedEvent) {
    console.log('onLikeChanged');
    this.liked = $event.liked;
    this.likesCount += this.liked ? 1 : -1;
  }
}
