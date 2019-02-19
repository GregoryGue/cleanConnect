export class Cleaner {

    companyName: string;
    address: {
        civicNumber: string,
        street: string,
        city: string,
        postalCode: string
    }
    phoneNumber: string;
    numberOfEmployees: number;

    contactPerson: {
        firstName: string;
        lastName: string;
        contactPhoneNumber: string;
        contactEmail: string;
    }

    constructor(companyName: string, address:
                    {
                        civicNumber: string,
                        street: string,
                        city: string,
                        postalCode: string
                    },
                    phoneNumber: string, numberOfEmployees: number, contactPerson: {firstName: string;
                        lastName: string;
                        contactPhoneNumber: string;
                        contactEmail: string;
                    }
                ) {
                    this.companyName = companyName;
                    this.address = address;
                    this.phoneNumber = phoneNumber;
                    this.numberOfEmployees = numberOfEmployees;
                    this.contactPerson = contactPerson;
                  }
}
