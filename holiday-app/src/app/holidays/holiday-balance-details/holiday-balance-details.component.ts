import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HolidayBalance } from '../holiday-balance.model'

@Component({
  selector: 'holiday-balance-details',
  templateUrl: './holiday-balance-details.component.html',
  styleUrls: ['./holiday-balance-details.component.css']
})
export class HolidayBalanceDetailsComponent implements OnInit {

  @Input() holidayBalance

  @Output() update: EventEmitter<HolidayBalance> = new EventEmitter();

  constructor() { 

  }

  @ViewChild('holidayBalanceDetailsForm') form;

  ngAfterViewInit() {
    //console.log(this.form)
    //this.form.control.valueChanges
    //  .subscribe(values => this.updateBalance(values));
  }

  onSubmit() {
    this.updateBalance()
  }

  updateBalance() {
    //console.log(values);
    this.update.emit(this.holidayBalance)
  }

  ngOnInit() {
  }

}
