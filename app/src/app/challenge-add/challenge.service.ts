import { Injectable } from '@angular/core';
import { IChallenge } from '../user/challenge.interface';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../message.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  apiUrl = environment.apiUrlLink + "/user/"

  constructor(private http: HttpClient) { }

  addChallenge(newChallenge: IChallenge, username: string) {
    return this.http.post<IMessage>(this.apiUrl + username + "/challenge/add", newChallenge);
  }

  removeChallenge(newChallenge: IChallenge, username: string) {
    return this.http.post<IMessage>(this.apiUrl + username + "/challenge/remove", newChallenge);
  }

}
