import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdModalComponent } from './ad-modal/ad-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userType: string = "";

  constructor(private router: Router, 
    private authService: AuthService,
    private modalCtrl: ModalController) {}

  ngOnInit() {
   this.authService.typeUser.subscribe((typeUser) => {
     this.userType = typeUser;
   });
  }

  navigateToRecordHealthStats() {
    this.router.navigate(['/record-health-stats']);
  }

  async showAd() {
    if(this.userType != 'premium') {
      console.log('show ad');
        const modal = await this.modalCtrl.create({
          component: AdModalComponent,
        });
    
        modal.present();
    }
  }
}
