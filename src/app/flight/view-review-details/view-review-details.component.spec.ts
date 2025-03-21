import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReviewDetailsComponent } from './view-review-details.component';

describe('ViewReviewDetailsComponent', () => {
  let component: ViewReviewDetailsComponent;
  let fixture: ComponentFixture<ViewReviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReviewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
