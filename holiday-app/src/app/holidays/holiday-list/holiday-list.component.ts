import { Component, OnInit } from '@angular/core';

import { Holiday } from '../holiday.model'
import { HolidayDataService } from '../holiday-data.service'

@Component({
  selector: 'holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  holidays: Holiday[] = []

  constructor(private holidayDataService: HolidayDataService) { 
    //console.dir(holidayDataService.getAllHolidays())
    Object.assign(this.holidays, holidayDataService.getAllHolidays())
  }

  ngOnInit() {
  }

}
