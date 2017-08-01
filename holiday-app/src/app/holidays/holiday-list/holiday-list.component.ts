import { Component, OnInit, Input } from '@angular/core';
import { Holiday } from '../holiday.model'

@Component({
  selector: 'holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css'],
  providers: []
})
export class HolidayListComponent implements OnInit {

  @Input()
  holidays: Holiday[] = []

  //holiday = new Holiday();
  holiday: Holiday = {}

  constructor() { 

  }

  ngOnInit() {}

  

}
