import { Component, OnInit } from '@angular/core';
import { CleanerService } from 'src/app/shared/services/cleaner.service';
import { Cleaner } from 'src/app/shared/models/cleaners.model';

@Component({
  selector: 'app-cleaner-list',
  templateUrl: './cleaner-list.component.html',
  styleUrls: ['./cleaner-list.component.css']
})

export class CleanerListComponent implements OnInit {

  cleaners: Cleaner[];
  constructor(private cleanerService: CleanerService) { }

  ngOnInit() {
    this.cleaners = this.cleanerService.getCleaners();
  }

}
