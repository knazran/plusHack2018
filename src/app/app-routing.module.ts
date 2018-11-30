import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'plan-trip', loadChildren: './plan-trip/plan-trip.module#PlanTripPageModule' },
  { path: 'recommend-trip', loadChildren: './recommend-trip/recommend-trip.module#RecommendTripPageModule' },
  { path: 'pre-trip', loadChildren: './pre-trip/pre-trip.module#PreTripPageModule' },
  { path: 'start-trip', loadChildren: './start-trip/start-trip.module#StartTripPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
