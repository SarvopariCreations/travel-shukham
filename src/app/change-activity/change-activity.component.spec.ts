import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeActivityComponent } from './change-activity.component';

describe('ChangeActivityComponent', () => {
  let component: ChangeActivityComponent;
  let fixture: ComponentFixture<ChangeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
