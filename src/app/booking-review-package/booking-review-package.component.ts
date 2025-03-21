import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-review-package',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './booking-review-package.component.html',
  styleUrl: './booking-review-package.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BookingReviewPackageComponent {
  tabs = [
    { name: 'Trip Summary' },
    { name: 'Passenger Details' },
    { name: 'TCS Consent' },
    { name: 'Review Cost' },
    { name: 'Make Payment' }
  ];
  activeTab: number = 0; // Default tab (first tab)

  selectTab(index: number): void {
    this.activeTab = index;
  }
}
