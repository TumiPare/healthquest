import { Component } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Subscription } from 'rxjs';
import { ILeaderboardItem } from './leaderboard-item.interface';

@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss']
})
export class LeaderboardPage {

  leaderboardSubscription: Subscription = new Subscription();
  username: string = 'testuser';
  leaderboardItems: ILeaderboardItem[] = [];

  constructor(private leaderboardService: LeaderboardService) { }

  ionViewWillEnter() {
    this.leaderboardSubscription = this.leaderboardService.getLeaderboard(this.username).subscribe((leaders) => {
      this.leaderboardItems = leaders;
    });
  }

  ngOnDestroy() {
    this.leaderboardSubscription.unsubscribe();
  }

}
