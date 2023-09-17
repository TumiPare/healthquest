import { Injectable } from '@angular/core';
import { IChallenge } from '../user/challenge.interface';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  apiUrl = "http://healthquest.ddns.net:5000/user/"

  constructor(private http: HttpClient) { }

  addChallenge(newChallenge: IChallenge, username: string) {
    return this.http.post<IMessage>(this.apiUrl + username + "/challenge/add", newChallenge);
  }

  removeChallenge(newChallenge: IChallenge, username: string) {
    return this.http.post<IMessage>(this.apiUrl + username + "/challenge/remove", newChallenge);
  }

}
