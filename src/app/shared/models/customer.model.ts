export class Customer {

    firstName: string;
    lastName: string;
    adress: object;
    phoneNumber: string;
    email: string;

    constructor(firstName: string, lastName: string, adress: object, phoneNumber: string, email: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

}
