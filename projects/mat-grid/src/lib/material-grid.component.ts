// tslint:disable-next-line:max-line-length
import { Component, OnInit, ViewChild, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';


import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MaterialGridTableData } from './material-grid-material-table.data';
import { MaterialGridConfiguration } from './material-grid.configuration';
import { MaterialViewGridColumn } from './material-grid-view.column';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'material-grid',
  templateUrl: './material-grid.component.html',
  styleUrls: ['./material-grid.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class MaterialGridComponent implements OnInit, AfterViewInit {



  @Input() gridConfiguration: MaterialGridConfiguration;

  public matTableDataSource: MatTableDataSource<MaterialGridTableData>;
  private data: any[];
  private dataSourceData: MaterialGridTableData[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public pageSizeOptions = [5, 10];
  public displayedColumns = [];
  public gridColumns: MaterialViewGridColumn[] = [];
  constructor(
    private cd: ChangeDetectorRef) {

  }

  ngOnInit() {

    this.sort = new MatSort();
    if (this.gridConfiguration) {

      if (this.data) {
        this.setDataSource(this.data);
      }
      this.displayedColumns = this.gridConfiguration.getColumnsFieldsName();
      this.pageSizeOptions = this.gridConfiguration.getPageSizeOptions();
      this.gridColumns = this.gridConfiguration.getColumns();
    } else {
      this.gridConfiguration = new MaterialGridConfiguration([], this.pageSizeOptions);
      this.cd.detectChanges();
    }


  }

  ngAfterViewInit(): void {
    this.refreshSetting();
  }

  private refreshSetting() {
    const scope = this;
    if (this.paginator && scope.matTableDataSource) {
      setTimeout(() => scope.matTableDataSource.paginator = scope.paginator);
    }


    if (this.sort && scope.matTableDataSource) {
      // this.sort.sort({ id: null, start: 'asc', disableClear: false });
      setTimeout(() => scope.matTableDataSource.sort = scope.sort);
    }
  }

  setDataSource(data: any[]) {
    this.dataSourceData = [];
    this.data = data;
    const scope = this;
    if (this.data) {
      // tslint:disable-next-line:only-arrow-functions
      this.data.forEach((item) => {
        const tableRow: MaterialGridTableData = new MaterialGridTableData();
        Object.keys(item).map(key => {
          tableRow[key] = item[key];
        });
        if (scope.dataSourceData) {
          scope.dataSourceData.push(tableRow);
        }
      });
    }

    this.matTableDataSource = new MatTableDataSource<MaterialGridTableData>(data);
    this.refreshSetting();
    this.cd.detectChanges();

  }


}
