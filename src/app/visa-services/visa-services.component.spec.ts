import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaServicesComponent } from './visa-services.component';

describe('VisaServicesComponent', () => {
  let component: VisaServicesComponent;
  let fixture: ComponentFixture<VisaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
