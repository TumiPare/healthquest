import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreature } from '../profile/creature.interface';
import { IChallenge } from '../profile/challenge.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = 'http://localhost:5000/user/';

  constructor(private http: HttpClient) { }

  getUserChallenges(username: string) {
    return this.http.get<IChallenge[]>(this.apiUrl + username + "/challenges");
  }

  getUserCreatures(username: string) {
    return this.http.get<ICreature[]>(this.apiUrl + username + "/creatures");
  }
}
