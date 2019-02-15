import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationInfo: Customer[];
  constructor() { }

  ngOnInit() {
  }

  registerUser(event: any) {
    // alert('Button Works!');
    console.log(event);
    console.log(event.target.value);
  }
}
