import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

import { Holiday } from './holiday.model';
import { HolidayBalance } from './holiday-balance.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getAllHolidays(): Observable<Holiday[]> {
    return this.http
      .get(API_URL + '/holidays')
      .map(response => {
        const holidays = response.json();
        return holidays.map((holiday) => new Holiday(holiday));
      })
      .catch(this.handleError);
  }

  public getHolidayBalance(): Observable<HolidayBalance> {
    return this.http
      .get(API_URL + '/balance/0')
      .map(response => {
        const balance = response.json();
        return balance;
      })
  }

  public createHoliday(holiday: Holiday): Observable<Holiday[]> {
    
    //console.log("Holiday: "+holiday)
    return this.http
      .post(API_URL + '/holidays', holiday)
      .map(response => {
        return new Holiday(response.json());
      })
      .catch(this.handleError);
  }

  public deleteHolidayById(holidayId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/holidays/' + holidayId)
      .map(response => null)
      .catch(this.handleError);
  }

  public updateHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http
      .put(API_URL + '/holidays/' + holiday.id, holiday)
      .map(response => {
        return new Holiday(response.json());
      })
      .catch(this.handleError);
  }

  public updateBalance(balance: HolidayBalance): Observable<HolidayBalance> {
    return this.http
      .put(API_URL + '/balance/' + 0, balance)
      .map(response => {
        return new HolidayBalance(response.json());
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
