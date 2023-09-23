import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IChallenge } from '../user/challenge.interface';
import { HomeService } from './home.service';
import { UserStorage } from '../user/user.storage';
import { ChallengeModalComponent } from '../challenge-add/challenge-modal/challenge-modal.component';
import { ICreature } from '../user/creature.interface';
import { Router } from '@angular/router';
import { IUser } from '../profile/user.interface';
import { IUserStats } from '../user/user-stats.interface';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  challengeSubscription: Subscription = new Subscription();
  userStatsSubscription: Subscription = new Subscription();
  username: string = 'testuser';
  challengeItems: IChallenge[] = [];
  userStats!: IUserStats;
  user: IUser | null = null;

  constructor(
    private navCtrl: NavController, 
    private homeService: HomeService, 
    private userStorage: UserStorage, 
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Home user", this.userStorage.user);
    this.user = this.userStorage.user;
  }

  ionViewWillEnter() {
    this.challengeSubscription = this.homeService.getUserChallenges(this.userStorage.user.username).subscribe((challenges) => {
      this.challengeItems = challenges;
    });

    this.userStatsSubscription = this.homeService.getUserStats(this.userStorage.user.username).subscribe((stats) => {
      this.userStats = stats;
    });
  }

  async openChallengeModal() {
    const modal = await this.modalCtrl.create({
      component: ChallengeModalComponent,
    });

    modal.present();
  }

  redirectToStepsTracking()
  {
    this.navCtrl.navigateForward('/steps-tracking'); 
  }

  redirectToWeightEntry()
  {
    this.navCtrl.navigateForward('/weight-entry'); 
  }

  redirectToFoodIntake()
  {
    this.navCtrl.navigateForward('/food-intake'); 
  }

  redirectToWaterIntake()
  {
    this.navCtrl.navigateForward('/water-intake'); 
  }

  navigateToRecordHealthStats() {
    this.router.navigate(['/record-health-stats']);
  }
}
