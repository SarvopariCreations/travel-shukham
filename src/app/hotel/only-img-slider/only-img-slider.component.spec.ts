import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyImgSliderComponent } from './only-img-slider.component';

describe('OnlyImgSliderComponent', () => {
  let component: OnlyImgSliderComponent;
  let fixture: ComponentFixture<OnlyImgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyImgSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlyImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
