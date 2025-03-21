import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePackageComponent } from './explore-package.component';

describe('ExplorePackageComponent', () => {
  let component: ExplorePackageComponent;
  let fixture: ComponentFixture<ExplorePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePackageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplorePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
