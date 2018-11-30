import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TripConsiderationPage } from './trip-consideration.page';

const routes: Routes = [
  {
    path: '',
    component: TripConsiderationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TripConsiderationPage]
})
export class TripConsiderationPageModule {}
