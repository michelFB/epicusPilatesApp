import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteAgendaPage } from './cliente-agenda.page';
import { NgCalendarModule } from 'ionic2-calendar';

const routes: Routes = [
  {
    path: '',
    component: ClienteAgendaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClienteAgendaPage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [ClienteAgendaPage]
})
export class ClienteAgendaPageModule {}
