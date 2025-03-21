import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedPartnerComponent } from './trusted-partner.component';

describe('TrustedPartnerComponent', () => {
  let component: TrustedPartnerComponent;
  let fixture: ComponentFixture<TrustedPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustedPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
