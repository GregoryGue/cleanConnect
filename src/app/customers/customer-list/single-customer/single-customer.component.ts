import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../shared/models/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.css']
})
export class SingleCustomerComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService ) { }

  ngOnInit() {
  }

  onSelected() {
    this.customerService.customerSelected.emit(this.customer);
    console.log(this.customer);
  }

}
