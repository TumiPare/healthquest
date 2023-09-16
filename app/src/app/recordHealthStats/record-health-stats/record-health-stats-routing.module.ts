import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordHealthStatsPage } from './record-health-stats.page';

const routes: Routes = [
  {
    path: '',
    component: RecordHealthStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordHealthStatsPageRoutingModule {}
