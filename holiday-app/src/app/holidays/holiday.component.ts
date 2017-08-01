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

  holidays: Holiday[] = []

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

}
