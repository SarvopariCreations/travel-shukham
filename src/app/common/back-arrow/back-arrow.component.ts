import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-arrow.component.html',
  styleUrl: './back-arrow.component.scss'
})
export class BackArrowComponent {
  @Input() icon: 'previous' | 'next' = 'previous'; // Default value
}
