import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IChallenge } from '../user/challenge.interface';
import { environment } from 'src/environments/environment';
import { IUserStats } from '../user/user-stats.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl = environment.apiUrlLink;

  constructor(private http: HttpClient) { }

  getUserChallenges(username: string) {
    return this.http.get<IChallenge[]>(this.apiUrl + '/user/' + username + "/challenges");
  }

  getUserStats(username: string) {
    return this.http.get<IUserStats>(this.apiUrl + '/action/' + username + "/stats");
  }
}
