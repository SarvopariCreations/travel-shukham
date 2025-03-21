import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressWordComponent } from './press-word.component';

describe('PressWordComponent', () => {
  let component: PressWordComponent;
  let fixture: ComponentFixture<PressWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressWordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
