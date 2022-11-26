import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './components/form/form.component';


import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableMaterialLayoutComponent } from './components/table-material-layout/table-material-layout.component';
@NgModule({
  declarations: [
    FormComponent,
    TableMaterialLayoutComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    TableMaterialLayoutComponent
  ]
})
export class CrudModule { }
