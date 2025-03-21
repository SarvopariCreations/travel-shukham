import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorationsSliderComponent } from './explorations-slider.component';

describe('ExplorationsSliderComponent', () => {
  let component: ExplorationsSliderComponent;
  let fixture: ComponentFixture<ExplorationsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorationsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorationsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
