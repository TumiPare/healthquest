import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILeaderboardItem } from './leaderboard-item.interface';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  apiUrl = 'http://healthquest.ddns.net:5000/user/';

  constructor(private http: HttpClient) { }

  getLeaderboard(username: string) {
    return this.http.get<ILeaderboardItem[]>(this.apiUrl+username+'/leaderboard');
  }
}
