import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule,
         MdButtonModule,
         MdDatepickerModule,
         MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { HolidayDataService } from './holiday-data.service'
import { ApiService } from './api.service'

import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { HolidayBalanceComponent } from './holiday-balance/holiday-balance.component';
import { HolidayComponent } from './holiday.component';
import { FooterComponent } from './footer/footer.component';

import { HolidaysRouterModule } from './holidays-router.module';
import { HolidayBalanceDetailsComponent } from './holiday-balance-details/holiday-balance-details.component'

@NgModule({
  imports: [
    CommonModule,
    HolidaysRouterModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [
    HolidayListComponent,
    HolidayFormComponent,
    HolidayBalanceComponent,
    HolidayComponent,
    FooterComponent,
    HolidayBalanceDetailsComponent
  ],
  exports: [
    HolidayListComponent,
    HolidayFormComponent
  ],
  providers: [HolidayDataService, ApiService]
})
export class HolidaysModule { }
