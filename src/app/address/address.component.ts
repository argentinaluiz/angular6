import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  address: {
    address: '',
    address_complement: '',
    number: '',
    city: '',
    neighboorhood: ''
    state: '',
    zipcode: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
