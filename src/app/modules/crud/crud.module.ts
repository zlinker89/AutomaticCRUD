import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableMaterialLayoutComponent } from './components/table-material-layout/table-material-layout.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    FormComponent,
    TableMaterialLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CrudRoutingModule,
  ],
  exports: [
    TableMaterialLayoutComponent
  ]
})
export class CrudModule { }
