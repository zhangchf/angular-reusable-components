import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  protected get() {
    // return this.http.get(this.url).pipe(catchError(err => {
    //   console.log("DataService ErrorHandler: " + err);
    //   return Observable.throw(err);
    // }));

    return this.http.get(this.url);

    // return ajax.getJSON(this.url).pipe(retry(3), catchError(err => {
    //   console.log("err: " + err);
    //   return Observable.throw(err);
    // }));
  }
}
