import { EventEmitter, Injectable } from '@angular/core';
import { Cleaner } from '../models/cleaners.model';

@Injectable()
export class CleanerService {
    cleanerSelected = new EventEmitter<Cleaner>();

    private cleaners: Cleaner [] = [
        new Cleaner(
            'Company1',
        {   civicNumber: '1',
            street: 'st-laurent',
            city: 'montreal',
            postalCode: 'H3G 1T4'
        },
            '555-555-5555',
            10,
        {   firstName: 'Serge',
            lastName: 'Morin',
            contactPhoneNumber: '666-666-6666',
            contactEmail: 's.m@gmail.com'
        }
                    ),
        new Cleaner(
            'Company2',
        {   civicNumber: '2',
            street: 'st-Catherine',
            city: 'Montreal',
            postalCode: 'H3G 1g4'
        },
            '666-666-6666',
             5,
        {   firstName: 'Raymond',
            lastName: 'Chabot',
            contactPhoneNumber: '777-777-7777',
            contactEmail: 'r.c@gmail.com'
        }
                   )
    ];

    getCleaners() {
        // return a COPY of the cleaners array
        return this.cleaners.slice();
    }
}