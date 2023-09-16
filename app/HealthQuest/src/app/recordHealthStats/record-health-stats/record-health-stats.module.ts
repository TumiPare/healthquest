import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordHealthStatsPageRoutingModule } from './record-health-stats-routing.module';

import { RecordHealthStatsPage } from './record-health-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordHealthStatsPageRoutingModule
  ],
  declarations: [RecordHealthStatsPage]
})
export class RecordHealthStatsPageModule {}
