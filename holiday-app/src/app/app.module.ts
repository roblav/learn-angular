import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule,
         MdButtonModule,
         MdDatepickerModule,
         MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HolidaysModule } from './holidays/holidays.module'
import { LoginModule } from './login/login.module'
import { AppRouterModule } from './app-router.module'

import { ApiService } from './holidays/api.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HolidaysModule,
    LoginModule,
    AppRouterModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
