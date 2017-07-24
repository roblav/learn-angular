export class Holiday {
    constructor(
        public description: String,
        public startDate: Date,
        public endDate: Date,
        public days: Number,
        public hours: Number,
        public taken: Boolean,
    ) { }
}