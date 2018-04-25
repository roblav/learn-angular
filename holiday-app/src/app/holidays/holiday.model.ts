export class Holiday {
  id?: number
  description?: string
  holidayStart?: string
  holidayEnd?: string
  hoursTaken?: number
  taken?: boolean = false

  constructor(values: Object = {}) {
    this.hoursTaken = 0
    Object.assign(this, values);
  }
}