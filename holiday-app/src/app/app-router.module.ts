import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component'
import { Default404Component } from './default/404/404.component';

let appRoutes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: '**', component: Default404Component}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    Default404Component
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
