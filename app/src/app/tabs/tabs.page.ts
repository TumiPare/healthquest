import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  userType: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
   this.authService.typeUser.subscribe((typeUser) => {
     this.userType = typeUser;
   });
  }

  navigateToRecordHealthStats() {
    this.router.navigate(['/record-health-stats']);
  }

  showAd() {
    if(this.userType != 'premium') {
      console.log('show ad');
    }
  }
}
