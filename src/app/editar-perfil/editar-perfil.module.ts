import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { EditarPerfilPage } from './editar-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxMaskIonicModule
  ],
  declarations: [EditarPerfilPage]
})
export class EditarPerfilPageModule {}
