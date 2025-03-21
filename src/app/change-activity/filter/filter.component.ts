import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  isSectionOpen: { [key: string]: boolean } = {
    timeSlot: true,
    activityDuration: true,
    interests: true,
    groupType:true,
    otherFilter:true,
    Transfer:true,
    // Initialize other sections as needed
  };

  toggleSection(section: string): void {
    this.isSectionOpen[section] = !this.isSectionOpen[section];
  }
}