import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityModelComponent } from './add-activity-model.component';

describe('AddActivityModelComponent', () => {
  let component: AddActivityModelComponent;
  let fixture: ComponentFixture<AddActivityModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddActivityModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddActivityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
