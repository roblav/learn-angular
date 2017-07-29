import { Injectable } from '@angular/core';
import { Holiday } from './holiday.model'


@Injectable()
export class HolidayDataService {

  private lastId: number = 0

  private holidays: Holiday[] = [
    {
      id: 0,
      description: "Centre Parcs",
      startDate: new Date(),
      endDate: new Date(),
      days: 0,
      hours: 0,
      taken: false
    }
  ]

  constructor() { }

  //Simulate GET /holidays
  getAllHolidays(): Holiday[] {
    return this.holidays
  }

  //Simulate GET /holidays/:id
  getHolidayById(id): Holiday {
    return this.holidays
      .filter(holiday => holiday.id === id)
      .pop()
  }

  //Simulate POST /holidays
  addHoliday(holiday: Holiday): HolidayDataService {
    if(!holiday.id){
      holiday.id = ++this.lastId
    }
    this.holidays.push(holiday)
    return this
  }

  //Simulate DELETE /holidays/:id
  deleteHolidayById(id): HolidayDataService {
    this.holidays = this.holidays
      .filter(holiday => holiday.id !== id)
    return this
  }

  //Simulate PUT /holidays:id
  updateHolidayById(id: number, values: Object = {}): Holiday{
    let holiday = this.getHolidayById(id)
    if(!holiday) {
      return null
    }
    Object.assign(holiday, values)
    return holiday
  }

  // Toggle taken holiday
  toggleHolidayTaken(holiday: Holiday) {
    let takenHoliday  = this.updateHolidayById(holiday.id, {
      taken: !holiday.taken
    })
    return takenHoliday
  }

}
