import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { ComponentePruebaComponent } from './pages/componente-prueba/componente-prueba.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ComponentePruebaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }