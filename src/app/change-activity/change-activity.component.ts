import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Package } from '../../app/common/package-card/package.model';
import { PackageCardComponent } from "../common/package-card/package-card.component";
import { HeaderComponent } from "../header/header.component";
import { FilterListingComponent } from "./filter-listing/filter-listing.component";
import { FilterComponent } from "./filter/filter.component";

@Component({
  selector: 'app-change-activity',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FilterListingComponent, FilterComponent],
  templateUrl: './change-activity.component.html',
  styleUrl: './change-activity.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeActivityComponent {
}
