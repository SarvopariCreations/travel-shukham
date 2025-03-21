import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFlightModalComponent } from './change-flight-modal.component';

describe('ChangeFlightModalComponent', () => {
  let component: ChangeFlightModalComponent;
  let fixture: ComponentFixture<ChangeFlightModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeFlightModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeFlightModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
