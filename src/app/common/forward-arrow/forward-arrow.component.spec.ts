import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardArrowComponent } from './forward-arrow.component';

describe('ForwardArrowComponent', () => {
  let component: ForwardArrowComponent;
  let fixture: ComponentFixture<ForwardArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwardArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForwardArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
