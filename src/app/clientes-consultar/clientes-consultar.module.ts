import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientesConsultarPage } from './clientes-consultar.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesConsultarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientesConsultarPage]
})
export class ClientesConsultarPageModule {}
