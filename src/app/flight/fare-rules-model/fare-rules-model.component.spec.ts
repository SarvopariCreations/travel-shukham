import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareRulesModelComponent } from './fare-rules-model.component';

describe('FareRulesModelComponent', () => {
  let component: FareRulesModelComponent;
  let fixture: ComponentFixture<FareRulesModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FareRulesModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FareRulesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
