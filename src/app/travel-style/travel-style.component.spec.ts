import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelStyleComponent } from './travel-style.component';

describe('TravelStyleComponent', () => {
  let component: TravelStyleComponent;
  let fixture: ComponentFixture<TravelStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
