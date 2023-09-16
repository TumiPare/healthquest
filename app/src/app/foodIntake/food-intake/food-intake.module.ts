import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodIntakePageRoutingModule } from './food-intake-routing.module';

import { FoodIntakePage } from './food-intake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodIntakePageRoutingModule
  ],
  declarations: [FoodIntakePage]
})
export class FoodIntakePageModule {}
