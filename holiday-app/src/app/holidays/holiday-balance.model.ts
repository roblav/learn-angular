export class HolidayBalance { 
  periodEndDate?: string
  endBalanceHours?: number
  estimatedBalanceEOY?:number

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
