import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ModalDailogComponent } from "../common/modal-dailog/modal-dailog.component";
import { SearchLocationComponent } from "./search-location/search-location.component";
import { CommonModule } from '@angular/common';
import { ViewAllPackagesComponent } from '../view-all-packages/view-all-packages.component';

declare var bootstrap: any;

@Component({
  selector: 'app-customize',
  standalone: true,
  imports: [ModalDailogComponent, SearchLocationComponent, CommonModule, ViewAllPackagesComponent],
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomizeComponent {
  @ViewChild(ModalDailogComponent, { static: true }) modalComponent!: ModalDailogComponent;

  openModal() {
    const modalElement = this.modalComponent.modalElement.nativeElement;
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();
  }
  currentSection: string = 'first-section';
  showTravelCategories: boolean = true;
  showTravelCount: boolean = false;
  showPopularChoices: boolean = false;
  openViewPackageModal: boolean = false;

  showSection(section: string) {
    if (section === 'app-search-location') {
      this.showTravelCategories = false;
    } else {
      this.currentSection = section;
    }
  }
  showSection1(section: string) {
    if (section === 'app-travel-count') {
      this.showTravelCategories = false;
      this.showTravelCount = true;
    } else if (section === 'app-search-location') {
      this.showTravelCategories = false;
      this.showTravelCount = false;
      this.showPopularChoices = true;
      // Add any additional logic for the next section.
    }
  }

  showSection2(section: string) {
    if (section === 'app-travel-count') {
      this.showTravelCategories = false;
      this.showTravelCount = true;
    } else if (section === 'app-search-location') {
      this.showTravelCategories = false;
      this.showTravelCount = false;
      // Add any additional logic for the next section.
    }
  }

  openAddCityModel(){
    this.openViewPackageModal = true;
  }
}
