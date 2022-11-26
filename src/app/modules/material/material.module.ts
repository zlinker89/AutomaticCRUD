import { NgModule } from '@angular/core';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [],
  exports: [
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
