import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [ CustomerService ]
})

export class CustomersComponent implements OnInit {
  selectedCustomer: Customer;
  customers: Customer[];
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.customerService.customerChanged
      .subscribe(
        (customers: Customer[]) => {
          this.customers = customers;
        }
      );
    this.customerService.customerSelected
      .subscribe(
        (customer: Customer) => {
          this.selectedCustomer = customer;
        }
      );
  }
}
