import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDailogComponent } from './modal-dailog.component';

describe('ModalDailogComponent', () => {
  let component: ModalDailogComponent;
  let fixture: ComponentFixture<ModalDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDailogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
