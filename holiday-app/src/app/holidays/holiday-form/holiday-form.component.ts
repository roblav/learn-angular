import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Holiday } from '../holiday.model'

@Component({
  selector: 'holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css']
})
export class HolidayFormComponent implements OnInit {

  dailyHours: number = 7.5;
  submitted: boolean = false;
  holiday: Holiday = new Holiday();
  editHoliday: boolean = false;

  @Input()
  updateHoliday: Holiday;

  @Output()
  add: EventEmitter<Holiday> = new EventEmitter();
  
  @Output()
  update: EventEmitter<Holiday> = new EventEmitter();

  
  constructor() { }

  ngOnChanges() {
    if(this.updateHoliday !== undefined) {
      this.holiday = this.updateHoliday
      this.editHoliday = true
    }
  }

  ngOnInit() {
    
  }

  get currentHoliday() { return JSON.stringify(this.holiday); }

  onBlur() {
    //Calculate hours
    let holidayhours = this.dailyHours * this.holiday.days
    this.holiday.hours = holidayhours
  }

  onSubmit() {
    if(this.editHoliday) {
      this.editedHoliday()
    } else {
      this.addHoliday();
    }
  }

  addHoliday() {
    this.add.emit(this.holiday);
    this.holiday = new Holiday();
  }

  editedHoliday() {
    this.update.emit(this.holiday);
    this.holiday = new Holiday();
    this.editHoliday = false;
  }

}
