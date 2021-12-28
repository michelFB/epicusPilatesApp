import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorariosPage } from './horarios.page';
import { NgCalendarModule } from 'ionic2-calendar';


@NgModule({
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HorariosPage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [HorariosPage]
})
export class HorariosPageModule {}
