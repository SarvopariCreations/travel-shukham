import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHotelModalComponent } from './change-hotel-modal.component';

describe('ChangeHotelModalComponent', () => {
  let component: ChangeHotelModalComponent;
  let fixture: ComponentFixture<ChangeHotelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeHotelModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeHotelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
