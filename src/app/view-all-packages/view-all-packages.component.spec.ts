import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPackagesComponent } from './view-all-packages.component';

describe('ViewAllPackagesComponent', () => {
  let component: ViewAllPackagesComponent;
  let fixture: ComponentFixture<ViewAllPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
