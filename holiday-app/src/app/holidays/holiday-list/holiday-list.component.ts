import { Component, OnInit } from '@angular/core';
import { HolidayDataService } from '../holiday-data.service'
import { Holiday } from '../holiday.model'

@Component({
  selector: 'holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
  providers: [HolidayDataService]
})
export class HolidayListComponent implements OnInit {

  workHours = 7.5;

  //holiday = new Holiday();
  holiday: Holiday = {}

  holidays: Holiday[] = []

  constructor(private holidayDataService: HolidayDataService) { 
    //console.dir(holidayDataService.getAllHolidays())
    //Object.assign(this.holidays, holidayDataService.getAllHolidays())
  }

  ngOnInit() {
    this.holidayDataService
      .getAllHolidays()
      .subscribe(
        (holidays) => {
          this.holidays = holidays;
        }
      );
  }

  

}
