import { AppError } from './../errors/AppError';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NetworkError } from '../errors/NetworkError';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    // this.service.get().subscribe(
    //   followers => {
    //     this.followers = followers;
    //     console.log(followers);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert("Network error!");
    //     console.log(JSON.stringify(error))
    //   }
    // );

    this.service.getFollowers().subscribe(
      followers => {
        this.followers = followers;
        console.log(followers);
      },
      (error: AppError) => {
        if (error instanceof NetworkError) {
          alert("Network Error!");
          console.log(JSON.stringify(error));
        }
      }
    )
  }

}
