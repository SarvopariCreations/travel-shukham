import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Output } from '@angular/core';
import { FilterComponent } from '../../change-activity/filter/filter.component';
import { FilterListingComponent } from '../../change-activity/filter-listing/filter-listing.component';

@Component({
  selector: 'app-add-activity-model',
  standalone: true,
  imports: [FilterListingComponent],
  templateUrl: './add-activity-model.component.html',
  styleUrl: './add-activity-model.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AddActivityModelComponent {

  @Output() close = new EventEmitter<void>();

  closeCityModal() {
    this.close.emit();
  }
}
