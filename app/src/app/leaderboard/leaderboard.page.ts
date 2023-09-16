import { Component } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leaderboard',
  templateUrl: 'leaderboard.page.html',
  styleUrls: ['leaderboard.page.scss']
})
export class LeaderboardPage {

  leaderboardSubscription: Subscription = new Subscription();
  username: string = '';
  
  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit() {
    this.leaderboardSubscription = this.leaderboardService.getLeaderboard(this.username).subscribe((leaders) => {

    });
  }

  ngOnDestroy() {
    this.leaderboardSubscription.unsubscribe();
  }

}
