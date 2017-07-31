import { Component, OnInit } from '@angular/core';

import { HolidayDataService } from '../holiday-data.service'
import { Holiday } from '../holiday.model'

@Component({
  selector: 'holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css']
})
export class HolidayFormComponent implements OnInit {
  
  holidays: Holiday[] = [];

  dailyHours = 7.5;
  holiday: Holiday = {
    "days": 0
  }

  submitted = false

  constructor(private holidayDataService: HolidayDataService) { }

  ngOnInit() {
  }

  get currentHoliday() { return JSON.stringify(this.holiday); }

  onBlur() {
    console.log(this.holiday.days)
    //Calculate hours
    let holidayhours = this.dailyHours * this.holiday.days
    console.log(holidayhours)
    this.holiday.hours = holidayhours
  }

  onSubmit() { 
    this.submitted = true; 
    this.onAddHoliday(JSON.stringify(this.holiday));
  }

  onAddHoliday(holiday) {
    this.holidayDataService
      .addHoliday(holiday)
      .subscribe(
        (newHoliday) => {
          this.holidays = this.holidays.concat(newHoliday);
        }
      );
  }

}
