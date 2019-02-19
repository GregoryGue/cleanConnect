import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCleanerComponent } from './single-cleaner.component';

describe('SingleCleanerComponent', () => {
  let component: SingleCleanerComponent;
  let fixture: ComponentFixture<SingleCleanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCleanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCleanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
