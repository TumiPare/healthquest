import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreature } from '../user/creature.interface';
import { IChallenge } from '../user/challenge.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = environment.apiUrlLink + '/user/';

  constructor(private http: HttpClient) { }

  getUserChallenges(username: string) {
    return this.http.get<IChallenge[]>(this.apiUrl + username + "/challenges");
  }

  getUserCreatures(username: string) {
    return this.http.get<ICreature[]>(this.apiUrl + username + "/creatures");
  }
}
