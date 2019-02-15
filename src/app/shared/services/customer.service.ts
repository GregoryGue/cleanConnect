import { EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerService {
    customerSelected = new EventEmitter<Customer>();
    private customers: Customer [] = [
        new Customer
        (
            'Greg', 'Gue',
            {
                civicNumber: '500',
                street: 'Montarville',
                city: 'Longueuil',
                postalCode: 'j4k2m2'
            },
        '450-111-1111', 'g@ggue.com'
        ),

        new Customer
        (
            'Greg2', 'Gue2',
            {
                civicNumber : '510',
                street: 'Cartier',
                city: 'Longueuil',
                postalCode: 'j4k4c7'
            },
        '450-222-2222', 'g@ggue2.com'
        )
    ];
    // Arrays and objects are reference types in Javascript, so therefore use the slice() method to
    // return a COPY of the customers array
    getCustomers() {
        return this.customers.slice();
    }

}