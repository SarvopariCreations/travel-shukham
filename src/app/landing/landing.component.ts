import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ThumbnailSliderComponent } from '../thumbnail-slider/thumbnail-slider.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TravelStyleComponent } from '../travel-style/travel-style.component';
import { ExplorationsSliderComponent } from '../explorations-slider/explorations-slider.component';
import { AdvertiseBannerComponent } from '../common/advertise-banner/advertise-banner.component';
import { BudgetCategoryComponent } from '../budget-category/budget-category.component';
import { ExplorePackageComponent } from "../explore-package/explore-package.component";
import { TrustedPartnerComponent } from "../trusted-partner/trusted-partner.component";
import { FooterComponent } from "../footer/footer.component";
import { PressWordComponent } from "../press-word/press-word.component";
import { HeaderComponent } from "../header/header.component";
import { RequestCallbackComponent } from "../common/request-callback/request-callback.component";
import { OfferSectionComponent } from "../offer-section/offer-section.component";
import { Router, RouterModule } from '@angular/router';
import { TripBookSliderComponent } from "../trip-book-slider/trip-book-slider.component";
import { SearchFlightComponent } from '../common/search-flight/search-flight.component';
import { HotelFilterComponent } from "../common/hotel-filter/hotel-filter.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ThumbnailSliderComponent, FormsModule, CommonModule, TravelStyleComponent, ExplorationsSliderComponent, AdvertiseBannerComponent, BudgetCategoryComponent, ExplorePackageComponent, TrustedPartnerComponent, FooterComponent, PressWordComponent, HeaderComponent, RequestCallbackComponent, OfferSectionComponent, TripBookSliderComponent, SearchFlightComponent, RouterModule, HotelFilterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingComponent {
  // Image sets for sliders
  imageSet1 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Cultural Paradise - Bali', price: 'Booked By 12+ Travellers', rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Kingdom Thailand', price: 'Booked By 18+ Travellers', rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Momery in Maldives', price: 'Booked By 48+ Travellers', rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Land of vietnam', price: 'Booked By 90+ Travellers', rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img5.jpg', title: 'love Shrilanka', price: 'Booked By 18+ Travellers', rating: false, description: false, exclusive: false },
  ];

  imageSet2 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Cultural Paradise - Bali', price: 'Booked By 12+ Travellers', rating: false, description: false, exclusive: true },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Magical carpet Turkey', price: 'Booked By 18+ Travellers', rating: false, description: false, exclusive: true },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Land of vietnam', price: 'Booked By 48+ Travellers', rating: false, description: false, exclusive: true },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Kingdom Thailand', price: 'Booked By 90+ Travellers', rating: false, description: false, exclusive: true },
    { src: '../../assets/slider/img5.jpg', title: 'Singapore', price: 'Booked By 18+ Travellers', rating: false, description: false, exclusive: true },
    { src: '../../assets/slider/pexels-2.jpeg', title: 'love Shrilanka', price: 'Booked By 118+ Travellers', rating: false, description: false, exclusive: true },
  ];

  imageSet3 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Cultural Paradise - Bali', price: 'Booked By 12+ Travellers', rating: '4.5', description: 'Experience the vibrant culture of Bali', exclusive: true },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Kingdom Thailand', price: 'Booked By 18+ Travellers', rating: '4.0', description: 'Discover the rich history and landscapes of Thailand.', exclusive: true },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Dubai, UAE', price: 'Booked By 48+ Travellers', rating: '5.0', description: 'Discover the rich history and landscapes of Thailand.', exclusive: true },
  ];

  imageSet4 = [
    {
      src: '../../assets/slider/pexels-2.jpeg', title: 'Koh Yao Noi, Thailand', price: 'Paradise Koh Yao', rating: '4.5', description: 'Boutique Thailand Island Paradise with Daily Breakfast & Cocktails', exclusive: true
    },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Dubai, UAE', price: 'Sofitel Dubai The Obelisk', rating: '4.7', description: 'Sky-High Sofitel Dubai Opulence with Club Access, Daily Breakfast & Nightly Free-Flow Cocktails', exclusive: true },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Singapore ', price: 'JEN Singapore Orchardgateway by Shangri-La', rating: '4.0', description: 'Award-Winning Singapore Cosmopolitan Hideaway by Shangri-La with Rooftop Infinity Pool', exclusive: true },
  ];

  imageSet5 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'life Dubai - UAE', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Land Australia', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'The New Land', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Signapore', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img5.jpg', title: 'Magical Turkey', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Azerbe', price: false, rating: false, description: false, exclusive: false },
  ];

  imageSet6 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Best of America', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'World Orlando', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Land of Califonia', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'East coast USA', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img5.jpg', title: 'West coast USA', price: false, rating: false, description: false, exclusive: false },
  ];

  @ViewChild('commonModal') commonModal!: RequestCallbackComponent;
  @ViewChild('searchSection', { static: true }) searchSectionRef!: ElementRef | undefined;

  @ViewChildren('customSelectWrap') customSelectWraps!: QueryList<ElementRef>;
  @ViewChildren('selectInput') selectInputs!: QueryList<ElementRef>;

  rooms = [{ adults: 2, children: 0 }];
  repeatCount = Array(12).fill(0); // Assuming 12 months for the "Anytime" section

  isHotelSectionVisible = false;
  isFlightSectionVisible = false;
  isCruiseSectionVisible = false;
  activeSection: string = 'specific';

  constructor(private router: Router, private renderer: Renderer2, private eRef: ElementRef) { }

  // Open modal
  openModal(): void {
    this.commonModal.open();
  }

  // Handle save action in modal
  handleSave(): void {
    console.log('Modal save button clicked!');
  }

  // Redirect to customize page
  redirectToCustomize() {
    this.router.navigate(['/customize']);
  }

  // Toggle visibility of sections
  toggleSection(section: string) {
    if (section === 'hotel') {
      this.isHotelSectionVisible = !this.isHotelSectionVisible;
      this.isFlightSectionVisible = false;
      this.isCruiseSectionVisible = false;
    } else if (section === 'flight') {
      this.isFlightSectionVisible = !this.isFlightSectionVisible;
      this.isHotelSectionVisible = false;
      this.isCruiseSectionVisible = false;
    } else if (section === 'cruise') {
      this.isCruiseSectionVisible = !this.isCruiseSectionVisible;
      this.isHotelSectionVisible = false;
      this.isFlightSectionVisible = false;
    }
  }

  // Close hotel section
  closeHotelSection() {
    this.isHotelSectionVisible = false;
  }

  // Handle click inside dropdown
  onClickInside(event: Event) {
    event.stopPropagation();
  }

  // Close all sections
  closeAllSections() {
    this.isHotelSectionVisible = false;
    this.isFlightSectionVisible = false;
    this.isCruiseSectionVisible = false;
  }

  // Handle click outside dropdowns
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.custom-select-dropdown')) {
      this.closeAllSections();
    }
  }

  // Select active section
  selectSection(section: string): void {
    this.activeSection = section;
  }

  // Add a new room
  addRoom() {
    this.rooms.push({ adults: 2, children: 0 });
  }

  // Remove a room
  removeRoom(index: number) {
    if (this.rooms.length > 1) {
      this.rooms.splice(index, 1);
    } else {
      alert('You must have at least one room.');
    }
  }

  cards = [
    {
      image: '../../assets/slider/pexels-2.jpeg',
      alt: 'Weekend Image',
      title: 'Cultural Paradise - Bali',
      review: '4.5 (2 Reviews)'
    },
    {
      image: '../../assets/slider/pexels-3.jpeg',
      alt: 'Weekend Image',
      title: 'The Kingdom Thailand',
      review: '4.7 (3 Reviews)'
    },
    {
      image: '../../assets/slider/pexels-4.jpeg',
      alt: 'Weekend Image',
      title: 'Memory in Maldives',
      review: '4.8 (5 Reviews)'
    },
    {
      image: '../../assets/slider/pexels-5.jpeg',
      alt: 'Weekend Image',
      title: 'Land of Vietnam',
      review: '4.6 (4 Reviews)'
    },
    {
      image: '../../assets/slider/pexels-2.jpeg',
      alt: 'Weekend Image',
      title: 'Love Sri Lanka',
      review: '4.9 (6 Reviews)'
    },
    {
      image: '../../assets/slider/pexels-3.jpeg',
      alt: 'Weekend Image',
      title: 'Magical Turkey',
      review: '4.7 (7 Reviews)'
    },
  ];

  activeTab: string = 'offer';

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

}
