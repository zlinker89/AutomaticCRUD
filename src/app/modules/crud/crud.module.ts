import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// personal modules
import { MaterialModule } from '../material/material.module';
// components
import { MainComponent } from './components/main/main.component';
import { TableMaterialLayoutComponent } from './components/table-material-layout/table-material-layout.component';

@NgModule({
  declarations: [
    FormComponent,
    TableMaterialLayoutComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CrudRoutingModule,
  ],
  exports: [
    MainComponent
  ]
})
export class CrudModule { }
