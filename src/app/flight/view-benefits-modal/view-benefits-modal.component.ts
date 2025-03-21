import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-benefits-modal',
  standalone: true,
  imports: [],
  templateUrl: './view-benefits-modal.component.html',
  styleUrl: './view-benefits-modal.component.scss'
})
export class ViewBenefitsModalComponent {
  @Output() close = new EventEmitter<void>();

  closeViewBModal() {
    this.close.emit();
  }

}
