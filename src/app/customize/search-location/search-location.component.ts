import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-location.component.html',
  styleUrl: './search-location.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchLocationComponent {

}
