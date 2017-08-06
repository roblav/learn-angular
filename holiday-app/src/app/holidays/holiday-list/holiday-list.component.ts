import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Holiday } from '../holiday.model'

@Component({
  selector: 'holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
  providers: []
})
export class HolidayListComponent implements OnInit {

  @Input() holidays: Holiday[] = [];
  @Input() holidaysTotals;

  @Output() edit: EventEmitter<Holiday> = new EventEmitter();

  @Output() delete: EventEmitter<Holiday> = new EventEmitter();

  //holiday = new Holiday();
  holiday: Holiday = {}

  constructor() {}

  ngOnInit() {}

  editHoliday(id) {
    this.edit.emit(id);
  }

  deleteHoliday(id) {
    this.delete.emit(id);
  }

}
