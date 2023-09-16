import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepsTrackingPageRoutingModule } from './steps-tracking-routing.module';

import { StepsTrackingPage } from './steps-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepsTrackingPageRoutingModule
  ],
  declarations: [StepsTrackingPage]
})
export class StepsTrackingPageModule {}
