import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarOwnersModule } from './car-owners/car-owners.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarOwnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
