import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepsTrackingPage } from './steps-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: StepsTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsTrackingPageRoutingModule {}
