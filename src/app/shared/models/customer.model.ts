export class Customer {

    firstName: string;
    lastName: string;
    // address: object;
    address: {
        civicNumber: string,
        street: string,
        city: string,
        postalCode: string
    }
    phoneNumber: string;
    email: string;

    constructor(firstName: string, lastName: string, address:
        {
          civicNumber: string, street: string, city: string, postalCode: string 
        }, phoneNumber: string, email: string ) 
        {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }


}
