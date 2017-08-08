import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'holiday-balance-details',
  templateUrl: './holiday-balance-details.component.html',
  styleUrls: ['./holiday-balance-details.component.css']
})
export class HolidayBalanceDetailsComponent implements OnInit {

  @Input() holidayBalance

  constructor() { }

  ngOnInit() {
  }

}
