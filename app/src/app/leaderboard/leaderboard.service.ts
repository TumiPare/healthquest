import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ILeaderboardItem } from './leaderboard-item.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  apiUrl = environment.apiUrlLink + '/user/';

  constructor(private http: HttpClient) { }

  getLeaderboard(username: string) {
    return this.http.get<ILeaderboardItem[]>(this.apiUrl+username+'/leaderboard');
  }
}
