import { Component, OnInit } from '@angular/core';
import { Holiday } from '../holiday';

@Component({
  selector: 'app-simple-form',
  template: `
    <div class="jumbotron">
      <h1>Add a holiday</h1>
    </div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="description" class="col-sm-2 control-label">Description</label>
        <div class="col-sm-10">
          <input id="description" #myInput type="text" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label for="startDate" class="col-sm-2 control-label">Start date</label>
        <div class="md-sm-10">
          <material-datepicker id="startDate" class="" #myDate (click)="onFocus(myDate.inputText)" [(date)]="yourModelDate"></material-datepicker>
        </div>
      </div>
      <div class="form-group">
        <label for="endDate" class="col-sm-2 control-label">End date</label>
        <div class="md-sm-10">
          <material-datepicker id="endDate" class="" #endDate (click)="onFocus(endDate.inputText)" [(date)]="yourModelDate"></material-datepicker>
        </div>
      </div>
      <div class="form-group">
        <label for="days" class="col-sm-2 control-label">Days</label>
        <div class="col-sm-10">
          <input id="days" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label for="hours" class="col-sm-2 control-label">Hours</label>
        <div class="col-sm-10">
          <input id="hours" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default" (click)="onClick(myInput.value)">Add holiday</button>
        </div>
      </div>
    </form>
    <div class="container-fluid">
      <h2>List of holidays</h2>
      <ul>
        <li *ngFor="let holiday of holidaysList">
          {{ holiday }}
        </li>
      </ul>
      <table class="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Days</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        <tbody>
      </table>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  
  //Store the input value in an array
  holidaysList = [
    ['Wimbledon', '7/5/2017'],
    ['Centre Parcs', '14/8/2017']
  ];

  onClick(value) {
    console.log("Value:"+value)
    this.holidaysList.push(value)
    console.log(this.holidaysList)
  }
  
  onFocus(value){
    console.log(value)
  }

  constructor() { }

  ngOnInit() {
  }

}
