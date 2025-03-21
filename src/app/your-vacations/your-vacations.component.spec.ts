import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVacationsComponent } from './your-vacations.component';

describe('YourVacationsComponent', () => {
  let component: YourVacationsComponent;
  let fixture: ComponentFixture<YourVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourVacationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
