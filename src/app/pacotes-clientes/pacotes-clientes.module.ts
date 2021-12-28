import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PacotesClientesPage } from './pacotes-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: PacotesClientesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PacotesClientesPage]
})
export class PacotesClientesPageModule {}
