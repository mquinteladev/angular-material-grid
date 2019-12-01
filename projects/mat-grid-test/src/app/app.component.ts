import { Component, OnInit, ViewChild } from '@angular/core';

import { MaterialGridComponent, IButtonCommandOperation } from 'mat-grid';
import { MaterialGridConfiguration } from 'mat-grid';
import { Application } from './view-models/application';
import { MaterialGridColumn } from 'mat-grid';
import { MaterialGridColumnCommand } from 'mat-grid';
import { ButtonCommand } from 'mat-grid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mat-grid-test';

  gspGridConfiguration: MaterialGridConfiguration;

  @ViewChild('grid')
  grid: MaterialGridComponent;


  ngOnInit() {

    // tslint:disable-next-line:max-line-length
    const columns: (MaterialGridColumn | MaterialGridColumnCommand)[] = [
      new MaterialGridColumn('Application Id', 'Id', true),
      new MaterialGridColumn('Application Name', 'Name', true)
      , new MaterialGridColumnCommand([
        new ButtonCommand('', new ButtonOperation(), 'blue-icon mat-button', 'edit')
        , new ButtonCommand('', new ButtonOperation(), 'mat-button', 'delete_outline')], 'ACTIONS', 'mat-column-action')
    ];
    const data = [new Application('Xfinity', '123', '345')];
    this.gspGridConfiguration = new MaterialGridConfiguration(columns, [5, 10]);
    this.grid.setDataSource(data);



  }
}

export class ButtonOperation implements IButtonCommandOperation {
  click(event: any) {
    alert((event as Application).Id);
  }
}

