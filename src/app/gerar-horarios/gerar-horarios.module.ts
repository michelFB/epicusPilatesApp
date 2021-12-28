import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GerarHorariosPage } from './gerar-horarios.page';

const routes: Routes = [
  {
    path: '',
    component: GerarHorariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GerarHorariosPage]
})
export class GerarHorariosPageModule {}
