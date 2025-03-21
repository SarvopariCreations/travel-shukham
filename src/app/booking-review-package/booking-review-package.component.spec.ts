import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingReviewPackageComponent } from './booking-review-package.component';

describe('BookingReviewPackageComponent', () => {
  let component: BookingReviewPackageComponent;
  let fixture: ComponentFixture<BookingReviewPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingReviewPackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingReviewPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
