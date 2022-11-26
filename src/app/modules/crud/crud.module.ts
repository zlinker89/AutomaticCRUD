import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './components/form/form.component';


import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
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
