import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
      titleFontSize: '24', // Customize title font size
      subtitleColor: '#78C000', // Customize subtitle color
      showSubtitle: false, // Hide subtitle if needed
      showTitle: true,
      unitsFontSize: "12", // Set units font size
      showUnits: true, 
    })
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule { }
