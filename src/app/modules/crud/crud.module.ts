import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './components/form/form.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    FormComponent,
    TableLayoutComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    TableLayoutComponent
  ]
})
export class CrudModule { }
