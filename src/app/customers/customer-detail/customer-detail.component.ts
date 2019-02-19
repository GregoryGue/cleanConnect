import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../../shared/models/customer.model';
import { CustomerService } from '../../shared/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  @Input() customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}
