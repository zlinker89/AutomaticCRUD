import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './components/form/form.component';


import { TableMaterialLayoutComponent } from './components/table-material-layout/table-material-layout.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    FormComponent,
    TableMaterialLayoutComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatInputModule
  ],
  exports: [
    TableMaterialLayoutComponent
  ]
})
export class CrudModule { }
