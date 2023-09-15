import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightEntryPageRoutingModule } from './weight-entry-routing.module';

import { WeightEntryPage } from './weight-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightEntryPageRoutingModule
  ],
  declarations: [WeightEntryPage]
})
export class WeightEntryPageModule {}
