import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Holiday } from '../holiday.model'

@Component({
  selector: 'holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css']
})
export class HolidayFormComponent implements OnInit {
  holidays: Holiday[] = [];
  dailyHours = 7.5;
  submitted = false
  holiday: Holiday = new Holiday();

  @Output()
  add: EventEmitter<Holiday> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get currentHoliday() { return JSON.stringify(this.holiday); }

  onBlur() {
    //Calculate hours
    let holidayhours = this.dailyHours * this.holiday.days
    this.holiday.hours = holidayhours
  }

  /*onAddHoliday() {
    this.holidayDataService
      .addHoliday(this.holiday)
      .subscribe(
        (newHoliday) => {
          this.holidays = this.holidays.concat(newHoliday);
        }
      );

    this.holiday = new Holiday();
  }
  */

  addHoliday() {
    this.add.emit(this.holiday);
    this.holiday = new Holiday();
  }



}
