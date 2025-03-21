import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePriceModalComponent } from './compare-price-modal.component';

describe('ComparePriceModalComponent', () => {
  let component: ComparePriceModalComponent;
  let fixture: ComponentFixture<ComparePriceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparePriceModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComparePriceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
