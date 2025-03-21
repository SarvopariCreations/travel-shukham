import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ChangeTransferModalComponent } from '../customize-view/change-transfer-modal/change-transfer-modal.component';
import { ChangeFlightModalComponent } from '../customize-view/change-flight-modal/change-flight-modal.component';
import { ChangeHotelModalComponent } from '../customize-view/change-hotel-modal/change-hotel-modal.component';
import bootstrap from '../../main.server';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-confirmation',
  standalone: true,
  imports: [HeaderComponent,ChangeTransferModalComponent, ChangeFlightModalComponent, ChangeHotelModalComponent, CommonModule],
  templateUrl: './trip-confirmation.component.html',
  styleUrl: './trip-confirmation.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TripConfirmationComponent {

  constructor(private renderer: Renderer2) {}
  
  // openModal(): void {
  //   const modalElement = document.getElementById('commonModal');
  //   const modal = new bootstrap.Modal(modalElement);
  //   modal.show();
  // }

  isModalOpen = false;
  isHModalOpen = false;
  isFModalOpen = false;

  openModal1() {
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }


  openHotelModal() {
    this.isHModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeHotelModal() {
    this.isHModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  activeTab: string = 'summary';

  setActiveTab(tab: string): void {
      this.activeTab = tab;
  }

  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  openFlightModal() {
    this.isFModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeFlightModal() {
    this.isFModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
}
