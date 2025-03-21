import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-baggage-model',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-baggage-model.component.html',
  styleUrl: './add-baggage-model.component.scss'
})
export class AddBaggageModelComponent {
  @Output() close = new EventEmitter<void>()

  closeBaggegeModal() {
    this.close.emit();
  }
}
