import { Component, OnInit } from '@angular/core';

import { Holiday } from './holiday.model'
import { HolidayDataService } from './holiday-data.service'

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],
  providers: [ HolidayDataService ]
})
export class HolidayComponent implements OnInit {

  holidays: Holiday[] = [];

  updateHoliday: Holiday;

  constructor(private holidayDataService: HolidayDataService) { }

  public ngOnInit() {
    //Get allHolidays and add to holidays array
    this.holidayDataService
      .getAllHolidays()
      .subscribe(
        (holidays) => {
          this.holidays = holidays
        }
      )
  }

  onAddHoliday(holiday: Holiday) {
    this.holidayDataService
      .addHoliday(holiday)
      .subscribe(
        (newHoliday) => {
          this.holidays = this.holidays.concat(newHoliday);
        }
      )
  }

  onEditHoliday(id: number) {
    this.updateHoliday = this.holidays.filter((h) => h.id === id).pop();
    //console.log(this.updateHoliday)
  }

  onUpdateHoliday(holiday: Holiday) {
    this.holidayDataService
      .updateHoliday(holiday)
      .subscribe(
        (updatedHoliday) => {
          holiday = updatedHoliday
        },
        (_) => {
          // do nothing
        } 
      )
  }

  onDeleteHoliday(id: number) {
    this.holidayDataService
      .deleteHolidayById(id)
      .subscribe(
        (_) => {
          this.holidays = this.holidays.filter((h) => h.id !== id);
        }
      )
  }

}
