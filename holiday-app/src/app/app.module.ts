import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolidaysModule } from './holidays/holidays.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HolidaysModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
