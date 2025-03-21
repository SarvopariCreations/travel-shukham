import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBenefitsModalComponent } from './view-benefits-modal.component';

describe('ViewBenefitsModalComponent', () => {
  let component: ViewBenefitsModalComponent;
  let fixture: ComponentFixture<ViewBenefitsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBenefitsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBenefitsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
