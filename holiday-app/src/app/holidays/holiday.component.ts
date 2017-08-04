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
  holidaysPending: Holiday[] = [];
  holidaysTaken: Holiday[] = [];

  updateHoliday: Holiday;

  date_sort_desc(date1: Holiday, date2: Holiday) {
    let a = new Date(date2.startDay);
    let b = new Date(date1.startDay);
    return a>b ? -1 : a<b ? 1 : 0;
  }

  updateHolidayArray() {
    this.holidaysPending = this.holidays.filter((h) => h.taken == false).sort(this.date_sort_desc)
    this.holidaysTaken = this.holidays.filter((h) => h.taken == true).sort(this.date_sort_desc)
  }

  constructor(private holidayDataService: HolidayDataService) { }

  public ngOnInit() {
    //Get allHolidays and add to holidays array
    this.holidayDataService
      .getAllHolidays()
      .subscribe(
        (holidays) => {
          //I want to filter holidays taken
          this.holidays = holidays
          this.updateHolidayArray()
        }
      )
  }

  onAddHoliday(holiday: Holiday) {
    this.holidayDataService
      .addHoliday(holiday)
      .subscribe(
        (newHoliday) => {
          this.holidays = this.holidays.concat(newHoliday);
          this.updateHolidayArray()
        }
      )
  }

  onEditHoliday(id: number) {
    this.updateHoliday = this.holidays.filter((h) => h.id === id).pop();
    this.updateHolidayArray()
    //console.log(this.updateHoliday)
  }

  onUpdateHoliday(holiday: Holiday) {
    this.holidayDataService
      .updateHoliday(holiday)
      .subscribe(
        (updatedHoliday) => {
          holiday = updatedHoliday
          this.updateHolidayArray()
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
          this.updateHolidayArray()
        }
      )
  }

}
