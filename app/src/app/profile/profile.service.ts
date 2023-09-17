import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';
import { IMessage } from '../message.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  apiUrl = 'http://healthquest.ddns.net:5000/';

  constructor(private http: HttpClient) { }

  saveUser(user: IUser) {
    return this.http.post<IUser>(this.apiUrl + "user", user);
  }

  getUser(username: string) {
    return this.http.get<IUser | null>(this.apiUrl + "user/" + username);
  }

  getUserMayKnow(username: string) {
    return this.http.get<IUser[]>(this.apiUrl + "user/" + username + "/mayknow");
  }

  friendRequest(username: string, friendUsername: string) {
    return this.http.post<IMessage>(this.apiUrl + "friend" + "?userA=" + username + "&userB=" + friendUsername, {});
  }
}
