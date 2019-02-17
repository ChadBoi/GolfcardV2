import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://golf-courses-api.herokuapp.com/courses/';

  getCourse(courseID): Observable<any> {
    let courseURL = this.apiURL + `${courseID}`;
    return this.http.get(courseURL);
  }
}
