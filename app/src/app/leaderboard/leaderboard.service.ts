import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  apiUrl = 'localhost:8080/';

  constructor(private http: HttpClient) { }

  getLeaderboard(username: string) {
    return this.http.get(this.apiUrl+username+'/leaderboard');
  }
}
