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
        if(values['days']){
            values['days'] = parseInt(values['days'])
        }
        Object.assign(this, values);
    }
}