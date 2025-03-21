import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItegrationComponent } from './payment-itegration.component';

describe('PaymentItegrationComponent', () => {
  let component: PaymentItegrationComponent;
  let fixture: ComponentFixture<PaymentItegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentItegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentItegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
