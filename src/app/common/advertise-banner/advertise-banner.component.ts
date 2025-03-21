import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-advertise-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertise-banner.component.html',
  styleUrl: './advertise-banner.component.scss',
})
export class AdvertiseBannerComponent {
  @Input() imageUrl: string = '';
  @Input() linkUrl: string = '';
}
