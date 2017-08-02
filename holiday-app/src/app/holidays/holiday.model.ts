export class Holiday {
    id?: number
    description?: string
    startDay?: string
    endDay?: string
    days?: number
    hours?: number
    taken?: boolean = false

    constructor(values: Object = {}) {
        this.days = 0
        this.hours = 0
        Object.assign(this, values);
    }
}