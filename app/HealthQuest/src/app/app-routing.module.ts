import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'weight-entry',
    loadChildren: () => import('./weightEntry/weight-entry/weight-entry.module').then( m => m.WeightEntryPageModule)
  },  {
    path: 'water-intake',
    loadChildren: () => import('./waterIntake/water-intake/water-intake.module').then( m => m.WaterIntakePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
