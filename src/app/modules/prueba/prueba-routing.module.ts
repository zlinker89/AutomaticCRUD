import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ComponentePruebaComponent } from './pages/componente-prueba/componente-prueba.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'prueba', component: ComponentePruebaComponent },
      { path: '**', redirectTo: 'prueba' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
