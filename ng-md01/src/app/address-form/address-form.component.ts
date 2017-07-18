import { Component, OnInit } from '@angular/core';
import { Address } from '../address.model';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  address = new Address();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.address));
  }
}
