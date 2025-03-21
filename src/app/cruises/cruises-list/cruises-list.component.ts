import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { SliderComponent } from '../../hotel/slider/slider.component';
import { FilterComponent } from '../../hotel/filter/filter.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BudgetCategoryComponent } from '../../budget-category/budget-category.component';

@Component({
  selector: 'app-cruises-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FilterComponent, SliderComponent, CommonModule, RouterModule, FormsModule, BudgetCategoryComponent],
  templateUrl: './cruises-list.component.html',
  styleUrl: './cruises-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CruisesListComponent {
  class = 'red';

  imageSet3 = [
    {
      src: '../../assets/c-img.webp', title: false, price: false, rating: false, description: false, exclusive: false
    },
    { src: '../../assets/c-img1.webp', title: false, price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/c-img-2.webp', title: false, price: false, rating: false, description: false, exclusive: false },
  ];

  packages = [
    {
      tourLogo: '../../../assets/c-logo.jpg',
      title: 'Caribbean Cruise Adventure',
      description: 'Explore the crystal-clear waters and vibrant islands of the Caribbean on a luxury cruise ship.',
      rating: 9.0,
      reviews: 152,
      duration: '7 Nights',
      pricePerPerson: 85000,
      valuedPrice: 100000,
      discount: 15,
      highlights: ['Private Island Visit', 'Onboard Gourmet Dining', 'Live Entertainment Shows'],
      images: ['assets/images/cruise1.webp', 'assets/images/cruise2.webp'],
    },
    {
      tourLogo: '../../../assets/c-logo.jpg',
      title: 'European Grand Tour',
      description: 'Experience the cultural and historical wonders of Europe with guided city tours and scenic routes.',
      rating: 8.7,
      reviews: 185,
      duration: '12 Days',
      pricePerPerson: 140000,
      valuedPrice: 165000,
      discount: 15,
      highlights: ['Paris City Tour', 'Swiss Alps Excursion', 'Venice Gondola Ride'],
      images: ['assets/images/tour1.webp', 'assets/images/tour2.webp'],
    },
    {
      tourLogo: '../../../assets/c-logo.jpg',
      title: 'Alaskan Glacier Cruise',
      description: 'Sail through the stunning Alaskan glaciers while enjoying onboard activities and wildlife sightings.',
      rating: 9.5,
      reviews: 240,
      duration: '10 Nights',
      pricePerPerson: 125000,
      valuedPrice: 150000,
      discount: 17,
      highlights: ['Whale Watching', 'Glacier Viewing', 'Onboard Spa and Wellness'],
      images: ['assets/images/cruise3.webp', 'assets/images/cruise4.webp'],
    },
    {
      tourLogo: '../../../assets/c-logo.jpg',
      title: 'African Safari Expedition',
      description: 'Immerse yourself in the breathtaking landscapes and wildlife of Africa with this guided safari tour.',
      rating: 9.2,
      reviews: 210,
      duration: '8 Days',
      pricePerPerson: 175000,
      valuedPrice: 200000,
      discount: 12,
      highlights: ['Big Five Wildlife Viewing', 'Luxury Safari Camps', 'Cultural Experiences'],
      images: ['assets/images/tour3.webp', 'assets/images/tour4.webp'],
    },
    {
      tourLogo: '../../../assets/c-logo.jpg',
      title: 'Mediterranean Luxury Cruise',
      description: 'Discover the rich history and stunning coasts of the Mediterranean with a luxury cruise experience.',
      rating: 9.3,
      reviews: 198,
      duration: '14 Nights',
      pricePerPerson: 195000,
      valuedPrice: 220000,
      discount: 11,
      highlights: ['Santorini Sunset Views', 'Fine Dining', 'Exclusive Shore Excursions'],
      images: ['assets/images/cruise5.webp', 'assets/images/cruise6.webp'],
    },
  ];


  flightFilterData = [
    {
      key: 'Category',
      title: 'Category',
      options: [
        { id: 'rating1', value: '9+', label: 'Ultra Lux', price:'17' },
        { id: 'rating2', value: '8+', label: 'Cultural Tours', price:'105' },
        { id: 'rating3', value: '7+', label: 'Lux Exclusive', price:'60' },
        { id: 'rating1', value: '9+', label: 'Rail Journeys', price:'17' },
        { id: 'rating2', value: '8+', label: 'Wildlife Safaris', price:'105' },
        { id: 'rating3', value: '7+', label: 'Hiking, Cycling and Adventure', price:'60' },
        { id: 'rating1', value: '9+', label: 'Rail Journeys', price:'17' },
        { id: 'rating2', value: '8+', label: 'Wildlife Safaris', price:'105' },
        { id: 'rating3', value: '7+', label: 'Family Friendly', price:'60' }
      ]
    },
    {
      key: 'Operator',
      title: 'Operator',
      options: [
        { id: 'rating1', value: '9+', label: 'Luxury Escapes Tours', price:'17' },
        { id: 'rating2', value: '8+', label: 'LE Trusted Partner Tours', price:'105' },
        { id: 'rating3', value: '7+', label: 'G Adventures - National Geographic Journeys', price:'60' },
        { id: 'rating1', value: '9+', label: 'G Adventures - The GeLuxe Collection', price:'17' },
        { id: 'rating2', value: '8+', label: 'LE Signature Tours', price:'105' }
      ]
    },
    {
      key: 'Destinations',
      title: 'Destinations',
      options: [
        { id: 'rating1', value: '9+', label: 'Australia', price:'17' },
        { id: 'rating2', value: '8+', label: 'Italy', price:'105' },
        { id: 'rating3', value: '7+', label: 'Spain', price:'60' },
        { id: 'rating1', value: '9+', label: 'United States of America', price:'17' }
      ]
    },
    {
      key: 'Group Type',
      title: 'Group Type',
      options: [
        { id: 'rating1', value: '9+', label: 'Australia', price:'17' },
        { id: 'rating2', value: '8+', label: 'Italy', price:'105' },
        { id: 'rating3', value: '7+', label: 'Spain', price:'60' },
        { id: 'rating1', value: '9+', label: 'United States of America', price:'17' }
      ]
    },
  ];


  

  cruises = [
    {
      imgSrc: '../../assets/cruises/cruise.avif',
      name: 'Caribbean Cruise Adventure',
      location: 'Cruise in the Caribbean • 7 Nights',
      rating: 4.8,
      reviewCount: 1520,
      price: 85000,
      taxesAndFees: 15000
    },
    {
      imgSrc: '../../assets/cruises/cruise1.avif',
      name: 'Mediterranean Luxury Cruise',
      location: 'Cruise in the Mediterranean • 14 Nights',
      rating: 4.9,
      reviewCount: 1980,
      price: 195000,
      taxesAndFees: 22000
    },
    {
      imgSrc: '../../assets/cruises/cruise2.avif',
      name: 'Alaskan Glacier Cruise',
      location: 'Cruise in Alaska • 10 Nights',
      rating: 4.7,
      reviewCount: 2400,
      price: 125000,
      taxesAndFees: 17000
    },
    {
      imgSrc: '../../assets/cruises/cruise3.avif',
      name: 'European Grand Tour',
      location: 'Cruise in Europe • 12 Days',
      rating: 4.6,
      reviewCount: 1850,
      price: 140000,
      taxesAndFees: 20000
    },
    {
      imgSrc: '../../assets/cruises/cruise4.avif',
      name: 'African Safari Expedition',
      location: 'Cruise in Africa • 8 Days',
      rating: 4.8,
      reviewCount: 2100,
      price: 175000,
      taxesAndFees: 25000
    },
    {
      imgSrc: '../../assets/cruises/cruise5.avif',
      name: 'Antarctic Adventure Cruise',
      location: 'Cruise in Antarctica • 15 Days',
      rating: 4.9,
      reviewCount: 950,
      price: 300000,
      taxesAndFees: 35000
    },
    {
      imgSrc: '../../assets/cruises/cruise6.avif',
      name: 'Asian Explorer Cruise',
      location: 'Cruise in Asia • 10 Nights',
      rating: 4.7,
      reviewCount: 1200,
      price: 110000,
      taxesAndFees: 18000
    },
    {
      imgSrc: '../../assets/cruises/cruise7.avif',
      name: 'South Pacific Paradise Cruise',
      location: 'Cruise in the South Pacific • 12 Nights',
      rating: 4.8,
      reviewCount: 1350,
      price: 160000,
      taxesAndFees: 20000
    }
  ];

  searchQuery: string = '';
  cities = [
    { name: 'New York', image: '../../assets/slider/img1.webp' },
    { name: 'Los Angeles', image: '../../assets/slider/img2.webp' },
    { name: 'Chicago', image: '../../assets/slider/img3.webp' },
    { name: 'Houston', image: '../../assets/slider/img1.webp' },
    { name: 'Phoenix', image: '../../assets/slider/img2.webp' },
    { name: 'Philadelphia', image: '../../assets/slider/img3.webp' },
    { name: 'San Antonio', image: '../../assets/slider/img1.webp' },
    { name: 'San Diego', image: '../../assets/slider/img2.webp' },
    { name: 'Dallas', image: '../../assets/slider/img3.webp' },
    { name: 'San Jose', image: '../../assets/slider/img1.webp' },
    { name: 'Austin', image: '../../assets/slider/img2.webp' },
    { name: 'Jacksonville', image: '../../assets/slider/img3.webp' },
    { name: 'Fort Worth', image: '../../assets/slider/img1.webp' },
    { name: 'Columbus', image: '../../assets/slider/img2.webp' },
    { name: 'Charlotte', image: '../../assets/slider/img3.webp' },
    // Add more cities as needed
  ];

  filteredCities() {
    return this.cities.filter(city => city.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

    // Add a new room
    addRoom() {
      this.rooms.push({ adults: 2, children: 0 });
    }
    rooms = [{ adults: 2, children: 0 }];
    repeatCount = Array(12).fill(0); // Assuming 12 months for the "Anytime" section
    // Remove a room
    removeRoom(index: number) {
      if (this.rooms.length > 1) {
        this.rooms.splice(index, 1);
      } else {
        alert('You must have at least one room.');
      }
    }


    
  activeTab: string = 'offer';
  activeTab1: string = 'flexible';
  
  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  onSearchClick(tab: string) {
    this.activeTab1 = tab;
  }

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentYear: number = new Date().getFullYear();
  selectedYear: number = this.currentYear;

  incrementYear() {
    this.selectedYear++;
  }

  decrementYear() {
    if (this.selectedYear > this.currentYear) {
      this.selectedYear--;
    }
  }
}