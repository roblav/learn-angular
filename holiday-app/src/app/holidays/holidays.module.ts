import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayDataService } from './holiday-data.service'

import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { HolidayComponent } from './holiday.component';

import { HolidaysRouterModule } from './holidays-router.module'

@NgModule({
  imports: [
    CommonModule,
    HolidaysRouterModule
  ],
  declarations: [
    HolidayListComponent,
    HolidayFormComponent,
    HolidayComponent
  ],
  exports: [
    HolidayListComponent,
    HolidayFormComponent
  ],
  providers: [HolidayDataService]
})
export class HolidaysModule { }
