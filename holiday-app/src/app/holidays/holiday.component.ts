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
  title = 'Holiday Balance App';
  holidays: Holiday[] = [];
  holidaysPending: Holiday[] = [];
  holidaysTaken: Holiday[] = [];

  updateHoliday: Holiday;

  adjBalanceEOY = {
    days: 0,
    hours: 0
  }

  holidaysPendingTotals = {
    days: 0,
    hours: 0
  }

  estBalanceEOY = {
    days: 0,
    hours: 101.082
  }

  estimatedBalanceHoursEOY: number = this.estBalanceEOY.hours;

  //Work out the total hours


  date_sort_desc(date1: Holiday, date2: Holiday) {
    let a = new Date(date2.startDay);
    let b = new Date(date1.startDay);
    return a>b ? -1 : a<b ? 1 : 0;
  }

  updateHolidayArray() {
    this.holidaysPending = this.holidays.filter((h) => h.taken == false).sort(this.date_sort_desc)
    this.holidaysTaken = this.holidays.filter((h) => h.taken == true).sort(this.date_sort_desc)
    //Calulate total hours pending
    let totalDays = this.holidaysPending.reduce((a,b) => ({days: a.days + b.days}))
    let totalHours = this.holidaysPending.reduce((a,b) => ({hours: a.hours + b.hours}))
    //console.log(totalDays)
    this.holidaysPendingTotals.days = totalDays.days
    this.holidaysPendingTotals.hours = totalHours.hours
    //Update adjusted balance
    this.adjBalanceEOY = Object.assign({}, this.estBalanceEOY);
    this.adjBalanceEOY.hours = this.adjBalanceEOY.hours - totalHours.hours
    this.adjBalanceEOY.days = this.adjBalanceEOY.hours / 7.5

    this.estBalanceEOY.days = this.estBalanceEOY.hours / 7.5
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
    let holiday = this.holidays.filter((h) => h.id === id).pop();
    this.updateHoliday = Object.assign({}, holiday);
    this.updateHolidayArray()
    //console.log(this.updateHoliday)
  }

  onUpdateHoliday(holiday: Holiday) {
    this.holidayDataService
      .updateHoliday(holiday)
      .subscribe(
        (updatedHoliday) => {
          console.dir(updatedHoliday)
          this.holidays = this.holidays.filter((h) => h.id !== updatedHoliday.id).concat(new Holiday(updatedHoliday))
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
