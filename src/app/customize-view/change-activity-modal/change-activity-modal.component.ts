import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FilterListingComponent } from '../../change-activity/filter-listing/filter-listing.component';

@Component({
  selector: 'app-change-activity-modal',
  standalone: true,
  imports: [CommonModule, FilterListingComponent],
  templateUrl: './change-activity-modal.component.html',
  styleUrl: './change-activity-modal.component.scss'
})
export class ChangeActivityModalComponent {
  @Output() close = new EventEmitter<void>();

  closeActivityModal() {
    this.close.emit();
  }
}
