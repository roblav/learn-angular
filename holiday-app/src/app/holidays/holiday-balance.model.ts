export class HolidayBalance { 
  periodEndDate?: string
  endBalanceHours?: number
  estimatedBalanceEOY?:number
  dailyHours?:number

  constructor(values: Object = {}) {
    this.estimatedBalanceEOY = 0
    this.dailyHours = 7.5
    Object.assign(this, values);
  }
}
