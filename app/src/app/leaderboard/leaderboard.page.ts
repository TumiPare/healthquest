import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss']
})
export class LeaderboardPage {

  constructor() { }

}

import { Component } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Subscription } from 'rxjs';
import { ILeaderboardItem } from './leaderboard-item.interface';
import { UserStorage } from '../user/user.storage';

@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss']
})
export class LeaderboardPage {
  leaderboardSubscription: Subscription = new Subscription();
  leaderboardItems: ILeaderboardItem[] = [];

  constructor(private leaderboardService: LeaderboardService, private userStorage: UserStorage) { }

  ionViewWillEnter() {
    this.leaderboardSubscription = this.leaderboardService.getLeaderboard(this.userStorage.user.username).subscribe((leaders) => {
      this.leaderboardItems = leaders;
    });
  }

  ngOnDestroy() {
    this.leaderboardSubscription.unsubscribe();
  }

}