import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = 'http://localhost:8080/user/';

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get<IUser>(this.apiUrl + username);
  }

  getUserMayKnow(username: string) {
    return this.http.get<IUser>(this.apiUrl + username + "/mayknow");
  }
}
