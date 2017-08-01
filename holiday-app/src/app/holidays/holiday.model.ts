export class Holiday {
    id?: number
    description?: string
    startDay?: string
    endDay?: string
    days?: number = 0
    hours?: number = 0
    taken?: boolean = false

    constructor(values: Object = {}) {
        Object.assign(this, values);
        this.days = 0
        this.hours = 0
    }
}