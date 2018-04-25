export class HolidayBalance {
  id?: number 
  periodEndDate?: string
  endBalanceHours?: string
  estimatedBalanceEOY?: number
  dailyHours?: number

  constructor(values: Object = {}) {
    this.endBalanceHours = '0'
    this.estimatedBalanceEOY = 0
    this.dailyHours = 7.5
    Object.assign(this, values);
  }
}
