import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationInfo: Customer[];
  
  @ViewChild('firstName') firstNameContentInput: ElementRef;
  @ViewChild('lastName') lastNameContentInput: ElementRef;
  @ViewChild('civicNumber') civicNumberContentInput: ElementRef;
  @ViewChild('street') streetContentInput: ElementRef;
  @ViewChild('city') cityContentInput: ElementRef;
  @ViewChild('postalCode') postalCodeContentInput: ElementRef;

  constructor(private custService: CustomerService ) { }

  ngOnInit() {
  }

  registerUser(event: any) {
   
    // console.log(this.firstNameContentInput);

    const userFirstName = this.firstNameContentInput.nativeElement.value;
    const userLastName = this.lastNameContentInput.nativeElement.value;
    const useraddress = {  civicNumber: this.civicNumberContentInput.nativeElement.value,
                          street: this.streetContentInput.nativeElement.value,
                          city: this.cityContentInput.nativeElement.value,
                          postalCode: this.postalCodeContentInput.nativeElement.value
                          }
    
    const newUser = new Customer (userFirstName, userLastName, useraddress, '555-555-5555', 'gregory@gmail.com' ); 
    console.log(newUser);

  }
}
