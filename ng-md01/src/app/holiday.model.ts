export class Holiday {
  constructor(
    public description?: string,
    public startDay?: Date,
    public endDay?: Date,
    public dailyHours?: number,
    public days?: number,
    public hours?: number
  ) { }
}