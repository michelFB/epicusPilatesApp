import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClienteCadastroPage } from './cliente-cadastro.page';
// import { NgxMaskModule } from 'ngx-mask';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';
// import { MaskPipe } from 'ngx-mask';

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
    // NgxMaskModule.forChild(),
    NgxMaskIonicModule
  ],
  declarations: [ClienteCadastroPage],
  providers: [
    // MaskPipe
  ]
})
export class ClienteCadastroPageModule {}
