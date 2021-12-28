import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
import { IonicModule } from '@ionic/angular';

import { FisioAlterarPage } from './fisio-alterar.page';

const routes: Routes = [
  {
    path: '',
    component: FisioAlterarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxMaskIonicModule
  ],
  declarations: [FisioAlterarPage]
})
export class FisioAlterarPageModule {}
