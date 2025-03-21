import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTransferModalComponent } from './change-transfer-modal.component';

describe('ChangeTransferModalComponent', () => {
  let component: ChangeTransferModalComponent;
  let fixture: ComponentFixture<ChangeTransferModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTransferModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeTransferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
