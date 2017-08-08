import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'holiday-balance-details',
  templateUrl: './holiday-balance-details.component.html',
  styleUrls: ['./holiday-balance-details.component.css']
})
export class HolidayBalanceDetailsComponent implements OnInit {

  @Input() holidayBalance

  constructor() { 

  }

  @ViewChild('holidayBalanceDetailsForm') form;

  ngAfterViewInit() {
    console.log(this.form)
    this.form.control.valueChanges
      .subscribe(values => this.doSomething(values));
  }

  doSomething(values) {
    console.log(values);
  }

  ngOnInit() {
  }

}
