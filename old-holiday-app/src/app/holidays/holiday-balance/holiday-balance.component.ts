import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'holiday-balance',
  templateUrl: './holiday-balance.component.html',
  styleUrls: ['./holiday-balance.component.css']
})
export class HolidayBalanceComponent implements OnInit {

  @Input() estBalanceEOY
  @Input() adjBalanceEOY

  constructor() { }

  ngOnInit() {
  }

}
