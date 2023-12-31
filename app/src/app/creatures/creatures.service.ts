import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreature } from '../user/creature.interface';
import { IChallenge } from '../user/challenge.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreaturesService {
  apiUrl = environment.apiUrlLink + '/user/';

  constructor(private http: HttpClient) { }

  getUserCreatures(username: string) {
    return this.http.get<ICreature[]>(this.apiUrl + username + "/creatures");
  }
}
