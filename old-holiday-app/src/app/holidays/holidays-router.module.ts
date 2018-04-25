import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { HolidayComponent } from './holiday.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';

let holidayRoutes: Routes = [
  { 
    path: 'holidays', component: HolidayComponent,
    children: [
      {path: 'list', component: HolidayListComponent},
      {path: 'edit', component: HolidayFormComponent}
    ]
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(holidayRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class HolidaysRouterModule { }
