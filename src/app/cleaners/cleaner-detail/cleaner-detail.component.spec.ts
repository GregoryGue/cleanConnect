import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanerDetailComponent } from './cleaner-detail.component';

describe('CleanerDetailComponent', () => {
  let component: CleanerDetailComponent;
  let fixture: ComponentFixture<CleanerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
