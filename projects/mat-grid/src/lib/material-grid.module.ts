import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { MaterialGridComponent } from './material-grid.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MaterialGridComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // // Component List
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [MaterialGridComponent]
})
export class MaterialGridModule { }
