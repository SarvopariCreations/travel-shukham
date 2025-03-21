import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() filterData: any; // Accept filter data from parent components
  isSectionOpen: { [key: string]: boolean } = {};

  ngOnChanges(): void {
    // Set all sections to open by default when filterData changes
    if (this.filterData) {
      this.filterData.forEach((filter: any) => {
        this.isSectionOpen[filter.key] = true;
      });
    }
  }

  toggleSection(section: string): void {
    this.isSectionOpen[section] = !this.isSectionOpen[section];
  }
}