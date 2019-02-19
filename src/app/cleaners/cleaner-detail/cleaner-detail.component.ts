import { Component, OnInit, Input } from '@angular/core';

import { Cleaner } from '../../shared/models/cleaners.model';
import { CleanerService } from '../../shared/services/cleaner.service';

@Component({
  selector: 'app-cleaner-detail',
  templateUrl: './cleaner-detail.component.html',
  styleUrls: ['./cleaner-detail.component.css']
})

export class CleanerDetailComponent implements OnInit {

  @Input() cleaner: Cleaner;

  constructor(private cleanerService: CleanerService) { }

  ngOnInit() {
    
  }

}
