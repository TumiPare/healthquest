import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IChallenge } from '../profile/challenge.interface';
import { HomeService } from './home.service';

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

  constructor(private navCtrl: NavController, private homeService: HomeService) {}

  ionViewWillEnter() {
    this.challengeSubscription = this.homeService.getUserChallenges(this.username).subscribe((notification) => {
      this.challengeItems = notification;
    });
  }

  redirectToChallenge() {
    console.log("Adding Challenege");
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
