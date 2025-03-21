import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-policy-modal',
  standalone: true,
  imports: [],
  templateUrl: './view-policy-modal.component.html',
  styleUrl: './view-policy-modal.component.scss'
})
export class ViewPolicyModalComponent {
  @Output() close = new EventEmitter<void>();

  closeViewPolicyModal() {
    this.close.emit();
  }

}