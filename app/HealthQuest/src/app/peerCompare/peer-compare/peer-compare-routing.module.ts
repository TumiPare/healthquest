import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerComparePage } from './peer-compare.page';

const routes: Routes = [
  {
    path: '',
    component: PeerComparePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerComparePageRoutingModule {}
