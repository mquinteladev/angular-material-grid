import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialGridModule } from 'mat-grid';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
