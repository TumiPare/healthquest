import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChallengeModalComponent } from './challenge-add/challenge-modal/challenge-modal.component';
import { ActionModalComponent } from './action/action-modal/action-modal.component';
import { GoPremiumModalComponent } from './profile/go-premium-modal/go-premium-modal.component';
import { AdModalComponent } from './tabs/ad-modal/ad-modal.component';

@NgModule({
  declarations: [AppComponent, ChallengeModalComponent, ActionModalComponent, GoPremiumModalComponent, AdModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
