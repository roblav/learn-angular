import { Component, OnInit } from '@angular/core';
import { Holiday } from '../holiday.model';

@Component({
  selector: 'holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css']
})
export class HolidayFormComponent implements OnInit {

  worksHours = 7.5;
  //holiday = new Holiday();
  holiday: Holiday = {
    dailyHours: this.worksHours,
    days: 0
  }

  constructor() { }

  ngOnInit() {
  }

  get currentHoliday() { return JSON.stringify(this.holiday); }

  onBlur() {
    console.log(this.holiday.days)
    //Calculate hours
    let holidayhours = this.holiday.dailyHours * this.holiday.days
    console.log(holidayhours)
    this.holiday.hours = holidayhours
  }



}
