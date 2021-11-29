import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable,BehaviorSubject, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username = "InactiveElement";
  private username2 = "Waldo-byte"
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('https://api.github.com/users/'+this.username)
    .pipe(
      map(res => res))
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/'+this.username+'/repos')
    .pipe(
      map(res => res))
  }
  getRepos2() {
    return this.http.get('https://api.github.com/users/'+this.username2+'/repos')
    .pipe(
      map(res => res))
  }
}
