import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodIntakePage } from './food-intake.page';

const routes: Routes = [
  {
    path: '',
    component: FoodIntakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodIntakePageRoutingModule {}
