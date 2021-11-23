import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  githubURL: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  findUsers() {
    const header = {
      Accept: 'application/vnd.github.v3+json',
    };
    return this.http.get(`${this.githubURL}?since=XXX`, { headers: header });
  }

  findUser(name: string) {
    return this.http.get(`${this.githubURL}/${name}`);
  }
}
