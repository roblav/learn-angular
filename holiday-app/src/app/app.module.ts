import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HolidaysModule } from './holidays/holidays.module';
import { LoginModule } from './login/login.module';
import { AppRouterModule } from './app-router.module';

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
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
