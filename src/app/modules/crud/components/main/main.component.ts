import { DataService } from './../../services/data.service';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { API, ColumnTableMaterialLayout } from '../../interface/table';
import { Subscription } from 'rxjs';
import { DataServer } from '../../interface/data';
import { TableMaterialLayoutComponent } from '../table-material-layout/table-material-layout.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild(TableMaterialLayoutComponent) tableMaterialLayoutComponent!: TableMaterialLayoutComponent;
  private subscription: Subscription;
  apis: API = {
    apiGet: 'http://localhost:3000/api/users?size=50&page=0&estado=Todos'
  }
  data: DataServer = {
    totalItems: 0,
    totalPages: 0,
    rows: [],
    currentPage: 0,
  }
  columnsMaterial: ColumnTableMaterialLayout[] = [
    {
      label: 'id',
      nameVar: 'id'
    },
    {
      label: 'hashId',
      nameVar: 'hashId'
    },
    {
      label: 'name',
      nameVar: 'name'
    },
    {
      label: 'estado',
      nameVar: 'estado'
    },
    {
      label: 'createdAt',
      nameVar: 'createdAt'
    },
    {
      label: 'updatedAt',
      nameVar: 'updatedAt'
    },
  ];
  constructor(private _dataService: DataService) { }
  ngOnInit() {}

  ngAfterViewInit() {
    this.subscription = this._dataService.getData(this.apis.apiGet).subscribe(data => {
      this.tableMaterialLayoutComponent.renderRows(data.rows)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
