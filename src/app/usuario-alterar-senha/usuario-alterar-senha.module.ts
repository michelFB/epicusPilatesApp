import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioAlterarSenhaPage } from './usuario-alterar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioAlterarSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioAlterarSenhaPage]
})
export class UsuarioAlterarSenhaPageModule {}
