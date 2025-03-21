import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fare-rules-model',
  standalone: true,
  imports: [],
  templateUrl: './fare-rules-model.component.html',
  styleUrl: './fare-rules-model.component.scss'
})
export class FareRulesModelComponent {
  @Output() close = new EventEmitter<void>()

  closeFareModal() {
    this.close.emit();
  }
}
