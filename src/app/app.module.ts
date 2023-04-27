import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjGridModule,
    WjChartModule,
    WjGridFilterModule,
    WjGridSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
