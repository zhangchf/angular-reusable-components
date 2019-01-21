import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable, throwError } from 'rxjs';
import { NetworkError } from '../errors/NetworkError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super("https://api.github.com/users/mosh-hamedani/followers", http);
   }

   getFollowers() {
     return super.get().pipe(catchError(this.handleError));
   }

   handleError(err) {
     console.log("GithubFollowerService: " + err);
     return throwError(new NetworkError(err));
   }
}
