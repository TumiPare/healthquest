import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { NavController } from '@ionic/angular';

register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  redirectToWeightEntryPage()
  {
    this.navCtrl.navigateForward('../weightEntryPage/weight-entry-page'); 
  }
}
