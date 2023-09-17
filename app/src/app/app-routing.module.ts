import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'weight-entry',
    loadChildren: () => import('./weightEntry/weight-entry/weight-entry.module').then( m => m.WeightEntryPageModule)
  },
  {
    path: 'water-intake',
    loadChildren: () => import('./waterIntake/water-intake/water-intake.module').then( m => m.WaterIntakePageModule)
  },
  {
    path: 'steps-tracking',
    loadChildren: () => import('./stepsTracking/steps-tracking/steps-tracking.module').then( m => m.StepsTrackingPageModule)
  },
  {
    path: 'food-intake',
    loadChildren: () => import('./foodIntake/food-intake/food-intake.module').then( m => m.FoodIntakePageModule)
  },
  {
    path: 'peer-compare',
    loadChildren: () => import('./peerCompare/peer-compare/peer-compare.module').then( m => m.PeerComparePageModule)
  },
  {
    path: 'record-health-stats',
    loadChildren: () => import('./recordHealthStats/record-health-stats/record-health-stats.module').then( m => m.RecordHealthStatsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
