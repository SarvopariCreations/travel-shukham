import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCallbackComponent } from './request-callback.component';

describe('RequestCallbackComponent', () => {
  let component: RequestCallbackComponent;
  let fixture: ComponentFixture<RequestCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestCallbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
