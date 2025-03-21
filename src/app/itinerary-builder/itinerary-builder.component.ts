import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ThumbnailSliderComponent } from "../thumbnail-slider/thumbnail-slider.component";
import { AddCityModalComponent } from "./add-city-modal/add-city-modal.component";
import { ChangeTransferModalComponent } from './change-transfer-modal/change-transfer-modal.component';
import { CommonModule } from '@angular/common';
import { ChangeHotelModalComponent } from './change-hotel-modal/change-hotel-modal.component';
import { ChangeFlightModalComponent } from './change-flight-modal/change-flight-modal.component';
import { AddActivityModelComponent } from './add-activity-model/add-activity-model.component';
declare var bootstrap: any;
export interface TripSection {
  type: 'detail' | 'connectivity';
  title?: string;
  nightsStay?: string;
  days?: DayDetail[];
  connectivity?: string;
}

export interface DayDetail {
  dayNumber: string;
  date: string;
  inclusions: Inclusion[];
}

export interface Inclusion {
  icon: string;
  description: string;
}

@Component({
  selector: 'app-itinerary-builder',
  standalone: true,
  imports: [HeaderComponent, ThumbnailSliderComponent, AddCityModalComponent, ChangeTransferModalComponent, CommonModule, ChangeHotelModalComponent, ChangeFlightModalComponent, AddActivityModelComponent],
  templateUrl: './itinerary-builder.component.html',
  styleUrl: './itinerary-builder.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class ItineraryBuilderComponent {

  constructor(private renderer: Renderer2) {}
  
  imageSet3 = [
    {
      src: '../../assets/slider/pexels-2.jpeg', title: false, price: false, rating: false, description: false, exclusive: false
    },
    { src: '../../assets/slider/pexels-5.jpeg', title: false, price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: false, price: false, rating: false, description: false, exclusive: false },
  ];


  title = 'Add City';
  message = 'This is a common modal dialog.';

  isCModalOpen = false;
  isModalOpen = false;
  isHModalOpen = false;
  isFModalOpen = false;
  isActivityModalOpen = false;

  openModal(): void {
    this.isCModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeCityModal() {
    this.isCModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

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

  openActivityModal() {
    this.isActivityModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeActivityModal() {
    this.isActivityModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }


  activeTab: string = 'itinerary';

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


  trips: TripSection[] = [
    {
      type: 'detail',
      title: 'Munnar',
      nightsStay: '2 Nights Stay',
      days: [
        {
          dayNumber: 'Day 1',
          date: 'Feb 2, Sun',
          inclusions: [
            { icon: 'hiking', description: 'Barceló Istanbul (Superior Room) or similar' },
            { icon: 'apartment', description: 'Dinner' },
            { icon: 'apartment', description: 'Dinner' },
            { icon: 'apartment', description: 'Dinner' },
          ]
        },
        {
          dayNumber: 'Day 2',
          date: 'Feb 3, Mon',
          inclusions: [
            { icon: 'hiking', description: 'Private AC Sedan - AC for sightseeing in & around Munnar' },
            { icon: 'apartment', description: 'Day Meals: Breakfast: Included at Broad Bean Resort & Spa, Munnar' },
          ]
        }
      ]
    },
    {
      type: 'connectivity',
      connectivity: 'Munnar to Thekkady'
    },
    {
      type: 'detail',
      title: 'Thekkady',
      nightsStay: '3 Nights Stay',
      days: [
        {
          dayNumber: 'Day 3',
          date: 'Feb 4, Tue',
          inclusions: [
            { icon: 'hiking', description: 'Thekkady sightseeing tour' },
            { icon: 'apartment', description: 'Dinner at the resort' },
          ]
        },
        {
          dayNumber: 'Day 4',
          date: 'Feb 5, Wed',
          inclusions: [
            { icon: 'hiking', description: 'Boat Ride at Periyar Lake' },
            { icon: 'apartment', description: 'Breakfast and lunch included' },
          ]
        }
      ]
    },
    {
      type: 'connectivity',
      connectivity: 'Thekkady to Alleppey'
    }
  ];
}
