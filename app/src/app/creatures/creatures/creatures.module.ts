import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaturesPageRoutingModule } from './creatures-routing.module';

import { CreaturesPage } from './creatures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreaturesPageRoutingModule
  ],
  declarations: [CreaturesPage]
})
export class CreaturesPageModule {}
