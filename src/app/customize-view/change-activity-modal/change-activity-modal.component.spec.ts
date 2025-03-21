import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeActivityModalComponent } from './change-activity-modal.component';

describe('ChangeActivityModalComponent', () => {
  let component: ChangeActivityModalComponent;
  let fixture: ComponentFixture<ChangeActivityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeActivityModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeActivityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
