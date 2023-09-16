import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { WeightEntryPageRoutingModule } from './weight-entry-routing.module';

import { WeightEntryPage } from './weight-entry.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightEntryPageRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  declarations: [WeightEntryPage]
})
export class WeightEntryPageModule {}
