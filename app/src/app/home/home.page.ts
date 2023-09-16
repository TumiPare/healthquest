import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IChallenge } from '../user/challenge.interface';
import { HomeService } from './home.service';
import { UserStorage } from '../user/user.storage';
import { ChallengeModalComponent } from '../challenge-add/challenge-modal/challenge-modal.component';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  challengeSubscription: Subscription = new Subscription();
  username: string = 'testuser';
  challengeItems: IChallenge[] = [];

  constructor(
    private navCtrl: NavController, 
    private homeService: HomeService, 
    private userStorage: UserStorage, 
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.challengeSubscription = this.homeService.getUserChallenges(this.userStorage.user.username).subscribe((notification) => {
      this.challengeItems = notification;
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
}
