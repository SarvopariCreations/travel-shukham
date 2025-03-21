import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookSliderComponent } from './trip-book-slider.component';

describe('TripBookSliderComponent', () => {
  let component: TripBookSliderComponent;
  let fixture: ComponentFixture<TripBookSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripBookSliderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripBookSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
