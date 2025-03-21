import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightReviewBookComponent } from './flight-review-book.component';

describe('FlightReviewBookComponent', () => {
  let component: FlightReviewBookComponent;
  let fixture: ComponentFixture<FlightReviewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightReviewBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightReviewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
