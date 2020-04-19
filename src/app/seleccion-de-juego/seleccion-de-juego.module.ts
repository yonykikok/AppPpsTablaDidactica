import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SeleccionDeJuegoPage } from './seleccion-de-juego.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionDeJuegoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SeleccionDeJuegoPage],

})
export class SeleccionDeJuegoPageModule { }
