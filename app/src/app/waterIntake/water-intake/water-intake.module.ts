import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterIntakePageRoutingModule } from './water-intake-routing.module';

import { WaterIntakePage } from './water-intake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterIntakePageRoutingModule
  ],
  declarations: [WaterIntakePage]
})
export class WaterIntakePageModule {}
