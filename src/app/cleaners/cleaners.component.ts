import { Component, OnInit } from '@angular/core';
import { Cleaner } from '../shared/models/cleaners.model';
import { CleanerService } from '../shared/services/cleaner.service';


@Component({
  selector: 'app-cleaners',
  templateUrl: './cleaners.component.html',
  styleUrls: ['./cleaners.component.css'],
  providers: [ CleanerService ]

})

export class CleanersComponent implements OnInit {

  cleaners: Cleaner[];
  constructor(private cleanerService: CleanerService) { }

  ngOnInit() {
    this.cleaners = this.cleanerService.getCleaners();
    console.log(this.cleaners);
  }

}
