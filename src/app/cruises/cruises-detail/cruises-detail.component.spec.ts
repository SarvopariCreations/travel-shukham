import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruisesDetailComponent } from './cruises-detail.component';

describe('CruisesDetailComponent', () => {
  let component: CruisesDetailComponent;
  let fixture: ComponentFixture<CruisesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CruisesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CruisesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
