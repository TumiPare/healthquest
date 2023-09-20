import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaturesPage } from './creatures.page';

const routes: Routes = [
  {
    path: '',
    component: CreaturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaturesPageRoutingModule {}
