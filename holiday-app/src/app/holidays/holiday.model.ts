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
    }
}