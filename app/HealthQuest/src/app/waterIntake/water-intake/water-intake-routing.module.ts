import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterIntakePage } from './water-intake.page';

const routes: Routes = [
  {
    path: '',
    component: WaterIntakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterIntakePageRoutingModule {}
