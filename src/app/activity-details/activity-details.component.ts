import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-details.component.html',
  styleUrl: './activity-details.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ActivityDetailsComponent {

}
