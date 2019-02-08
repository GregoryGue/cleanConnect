import { Cleaner } from '../models/cleaners.model';

export class CleanerService {
    private cleaners: Cleaner [] = [
        new Cleaner('Gregory', 'Gue', 'Test1'),
        new Cleaner('Gregory', 'Gue', 'Test2')
    ];

    // private cleaners: Cleaner = {
    //     firstName:'Gregory',
    //     lastName:'Gue',
    //     companyName: 'test3'
    // }

    getCleaners() {
        // return a COPY of the cleaners array
        return this.cleaners.slice();
    }
}