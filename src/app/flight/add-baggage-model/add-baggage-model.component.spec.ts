import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaggageModelComponent } from './add-baggage-model.component';

describe('AddBaggageModelComponent', () => {
  let component: AddBaggageModelComponent;
  let fixture: ComponentFixture<AddBaggageModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBaggageModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBaggageModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
