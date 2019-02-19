import { Component, OnInit, Input } from '@angular/core';
import { CleanerService } from 'src/app/shared/services/cleaner.service';
import { Cleaner } from 'src/app/shared/models/cleaners.model';

@Component({
  selector: 'app-single-cleaner',
  templateUrl: './single-cleaner.component.html',
  styleUrls: ['./single-cleaner.component.css']
})

export class SingleCleanerComponent implements OnInit {

  @Input() cleaner: Cleaner;

  constructor(private cleanerService: CleanerService ) { }

  ngOnInit() {
  }

  onSelected() {
    this.cleanerService.cleanerSelected.emit(this.cleaner);
    console.log(this.cleaner);
  }
}
