import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookFormComponent } from './book-form/book-form.component';
import 'hammerjs';
import { MdInputModule, MdButtonModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { AddressFormComponent } from './address-form/address-form.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    AddressFormComponent,
    HolidayFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
