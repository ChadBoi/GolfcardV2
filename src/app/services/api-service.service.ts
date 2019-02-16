import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://golf-courses-api.herokuapp.com/courses/';

  getCourse(courseID) {
    let courseURL = this.apiURL + `${courseID}`;
    return this.http.get(courseURL);
  }
}
