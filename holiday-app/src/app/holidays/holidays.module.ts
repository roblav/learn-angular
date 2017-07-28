import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayDataService } from './holiday-data.service'
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HolidayListComponent,
    HolidayFormComponent
  ],
  exports: [
    HolidayListComponent,
    HolidayFormComponent
  ],
  providers: [HolidayDataService]
})
export class HolidaysModule { }
