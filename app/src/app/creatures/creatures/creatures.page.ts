import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/home/home.service';
import { UserStorage } from 'src/app/user/user.storage';
import { ChallengeModalComponent } from 'src/app/challenge-add/challenge-modal/challenge-modal.component';
import { ICreature } from 'src/app/user/creature.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.page.html',
  styleUrls: ['./creatures.page.scss'],
})
export class CreaturesPage implements OnInit {
  creatureSubscription: Subscription = new Subscription();
  username: string = 'testuser';
  creatureItems: ICreature[] = [];

  constructor(    private homeService: HomeService, 
    private userStorage: UserStorage, ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.creatureSubscription = this.homeService.getUserCreatures(this.userStorage.user.username).subscribe((creatures) => {
      this.creatureItems = creatures;
    });
  }
}
