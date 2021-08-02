import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PacotesConsultarPage } from './pacotes-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: PacotesConsultarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PacotesConsultarPage]
})
export class PacotesConsultarPageModule {}
