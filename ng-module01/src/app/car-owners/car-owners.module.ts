import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarOwnersComponent } from './car-owners.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ CarOwnersComponent ],
  exports: [ CarOwnersComponent ]
})
export class CarOwnersModule { }
