import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FisioConsultarPage } from './fisio-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: FisioConsultarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FisioConsultarPage]
})
export class FisioConsultarPageModule {}
