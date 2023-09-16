import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerComparePageRoutingModule } from './peer-compare-routing.module';

import { PeerComparePage } from './peer-compare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeerComparePageRoutingModule
  ],
  declarations: [PeerComparePage]
})
export class PeerComparePageModule {}
