import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ApiService } from './api.service';
import { Holiday } from './holiday.model';
import { HolidayBalance } from './holiday-balance.model';


@Injectable()
export class HolidayDataService {

  private subject = new Subject<any>();

  private lastId: number = 0

  private holidays: Holiday[] = []

  constructor(private api: ApiService) { }

  //Simulate GET /holidays
  getAllHolidays(): Observable<Holiday[]> {
    return this.api.getAllHolidays();
  }

  //Simulate GET /holidays/:id
  getHolidayById(id): Holiday {
    return this.holidays
      .filter(holiday => holiday.id === id)
      .pop()
  }

  //Simulate POST /holidays
  createHoliday(holiday: Holiday): HolidayDataService {
    if(!holiday.id){
      holiday.id = ++this.lastId
    }
    this.holidays.push(holiday)
    return this
  }

  // Simulate POST /todos
  addHoliday(holiday: Holiday): Observable<Holiday[]> {
    return this.api.createHoliday(holiday);
  }

  //Simulate DELETE /holidays/:id
  deleteHolidayById(id): Observable<Holiday> {
    //this.holidays = this.holidays
    //  .filter(holiday => holiday.id !== id)
    //return this
    return this.api.deleteHolidayById(id)
  }

  updateHoliday(holiday: Holiday): Observable<Holiday>  {
    return this.api.updateHoliday(holiday);
  }

  updateBalance(balance: HolidayBalance): Observable<HolidayBalance> {
    return this.api.updateBalance(balance);
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
