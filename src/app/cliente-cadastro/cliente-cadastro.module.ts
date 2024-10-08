import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClienteCadastroPage } from './cliente-cadastro.page';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';


const routes: Routes = [
  {
    path: '',
    component: ClienteCadastroPage
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
  declarations: [ClienteCadastroPage],
  providers: [
    // MaskPipe
  ]
})
export class ClienteCadastroPageModule {}
