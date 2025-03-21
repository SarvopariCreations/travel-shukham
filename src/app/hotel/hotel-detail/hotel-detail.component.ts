import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ThumbnailSliderComponent } from '../../thumbnail-slider/thumbnail-slider.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { DateSliderComponent } from "../date-slider/date-slider.component";
import { SliderComponent } from "../slider/slider.component";
import { RouterModule } from '@angular/router';
import { OnlyImgSliderComponent } from '../only-img-slider/only-img-slider.component';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [HeaderComponent, ThumbnailSliderComponent, CommonModule, FooterComponent, DateSliderComponent, SliderComponent, RouterModule, OnlyImgSliderComponent, FormsModule],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HotelDetailComponent {
  imageSet1 = [
    { label: 'Extra inclusions', duration: '1 nights' },
    { label: 'Extra inclusions', duration: '2 nights' },
    { label: 'Extra inclusions', duration: '3 nights' },
    { label: 'Extra inclusions', duration: '4 nights' },
    { label: 'Extra inclusions', duration: '5 nights' },
    { label: 'Extra inclusions', duration: '6 nights' },
    { label: 'Extra inclusions', duration: '7 nights' },
    { label: 'Extra inclusions', duration: '8 nights' },
    { label: 'Extra inclusions', duration: '9 nights' },
    { label: 'Extra inclusions', duration: '10 nights' },
    { label: 'Extra inclusions', duration: '11 nights' },
    { label: 'Extra inclusions', duration: '12 nights' },
    { label: 'Extra inclusions', duration: '13 nights' },
    { label: 'Extra inclusions', duration: '14 nights' },
    { label: 'Extra inclusions', duration: '15 nights' },
    { label: 'Extra inclusions', duration: '16 nights' },
    { label: 'Extra inclusions', duration: '17 nights' },
    { label: 'Extra inclusions', duration: '18 nights' },
    { label: 'Extra inclusions', duration: '19 nights' },
    { label: 'Extra inclusions', duration: '20 nights' },
    { label: 'Extra inclusions', duration: '21 nights' },        
  ];

  title = 'Add City';
  message = 'This is a common modal dialog.';

  openModal(): void {
    const modalElement = document.getElementById('commonModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  isSoldOutListVisible: boolean = false;

  toggleSoldOutList() {
    this.isSoldOutListVisible = !this.isSoldOutListVisible;
  }

  isSoldOutWrapVisible: boolean = false;

  openSoldOutWrap() {
    this.isSoldOutWrapVisible = true; // Show the sold-out wrap section
  }

  closeSoldOutWrap() {
    this.isSoldOutWrapVisible = false; // Hide the sold-out wrap section
  }



  isScrolled = false;
  activeSection = '';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Check if the scroll position is greater than 100px
    this.isScrolled = scrollPosition > 100;
    this.updateActiveSection();
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  updateActiveSection() {
    const sections = ['location', 'facilities', 'finepart', 'Reviews'];
    const threshold = window.innerHeight / 2; // Center of the viewport

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }
  imageSet3 = [
    {
      src: '../../assets/slider/img3.webp', title: false, price: false, rating: false, description: false, exclusive: false
    },
    { src: '../../assets/slider/img1.webp', title: false, price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img2.webp', title: false, price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img3.webp', title: false, price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img4.webp', title: false, price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img5.webp', title: false, price: false, rating: false, description: false, exclusive: false },
  ];

  imageSet2 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Cultural Paradise - Bali', price: 'Booked By 12+ Travellers', rating: '4.5', description: 'Experience the vibrant culture of Bali', exclusive: true },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Kingdom Thailand', price: 'Booked By 18+ Travellers', rating: '4.0', description: 'Discover the rich history and landscapes of Thailand.', exclusive: true },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Dubai, UAE', price: 'Booked By 48+ Travellers', rating: '5.0', description: 'Discover the rich history and landscapes of Thailand.', exclusive: true },
  ];

  hotels = [
    {
      imgSrc: '../../assets/slider/img3.webp',
      name: 'The Taj Mahal Palace, Mumbai',
      location: 'Hotel in Colaba • 1.0 km from Gateway Of India',
      rating: 4.5,
      reviewCount: 1000,
      price: 35000,
      taxesAndFees: 6300
    },
    {
      imgSrc: '../../assets/slider/img1.webp',
      name: 'The Oberoi, New Delhi',
      location: 'Hotel in New Delhi • 2.0 km from India Gate',
      rating: 4.8,
      reviewCount: 850,
      price: 45000,
      taxesAndFees: 7000
    },
    {
      imgSrc: '../../assets/slider/img2.webp',
      name: 'The Leela Palace, Udaipur',
      location: 'Hotel in Udaipur • 0.5 km from Lake Pichola',
      rating: 4.7,
      reviewCount: 920,
      price: 40000,
      taxesAndFees: 6500
    },
    {
      imgSrc: '../../assets/slider/img4.webp',
      name: 'ITC Grand Chola, Chennai',
      location: 'Hotel in Chennai • 1.5 km from Marina Beach',
      rating: 4.6,
      reviewCount: 780,
      price: 38000,
      taxesAndFees: 6000
    },
    {
      imgSrc: '../../assets/slider/img2.webp',
      name: 'Taj Lake Palace, Udaipur',
      location: 'Hotel in Udaipur • 0.3 km from City Palace',
      rating: 4.9,
      reviewCount: 1100,
      price: 50000,
      taxesAndFees: 7500
    },
    {
      imgSrc: '../../assets/slider/img1.webp',
      name: 'The Ritz-Carlton, Bangalore',
      location: 'Hotel in Bangalore • 1.2 km from Cubbon Park',
      rating: 4.7,
      reviewCount: 890,
      price: 42000,
      taxesAndFees: 6800
    },
    {
      imgSrc: '../../assets/slider/img3.webp',
      name: 'JW Marriott, Pune',
      location: 'Hotel in Pune • 2.5 km from Shaniwar Wada',
      rating: 4.6,
      reviewCount: 760,
      price: 37000,
      taxesAndFees: 5900
    },
    {
      imgSrc: '../../assets/slider/img4.webp',
      name: 'Hyatt Regency, Kolkata',
      location: 'Hotel in Kolkata • 3.0 km from Victoria Memorial',
      rating: 4.5,
      reviewCount: 820,
      price: 36000,
      taxesAndFees: 5800
    }
  ];

  searchQuery: string = '';
  cities = [
    { name: 'John F. Kennedy International Airport', image: '../../assets/slider/img1.webp', country: 'USA' },
    { name: 'Los Angeles International Airport', image: '../../assets/slider/img2.webp', country: 'USA' },
    { name: 'O\'Hare International Airport', image: '../../assets/slider/img3.webp', country: 'USA' },
    { name: 'George Bush Intercontinental Airport', image: '../../assets/slider/img1.webp', country: 'USA' },
    { name: 'Phoenix Sky Harbor International Airport', image: '../../assets/slider/img2.webp', country: 'USA' },
    { name: 'Philadelphia International Airport', image: '../../assets/slider/img3.webp', country: 'USA' },
    { name: 'San Antonio International Airport', image: '../../assets/slider/img1.webp', country: 'USA' },
    { name: 'San Diego International Airport', image: '../../assets/slider/img2.webp', country: 'USA' },
    { name: 'Dallas/Fort Worth International Airport', image: '../../assets/slider/img3.webp', country: 'USA' },
    { name: 'San Jose International Airport', image: '../../assets/slider/img1.webp', country: 'USA' },
    { name: 'Austin-Bergstrom International Airport', image: '../../assets/slider/img2.webp', country: 'USA' },
    { name: 'Jacksonville International Airport', image: '../../assets/slider/img3.webp', country: 'USA' },
    { name: 'Dallas Love Field', image: '../../assets/slider/img1.webp', country: 'USA' },
    { name: 'Port Columbus International Airport', image: '../../assets/slider/img2.webp', country: 'USA' },
    { name: 'Charlotte Douglas International Airport', image: '../../assets/slider/img3.webp', country: 'USA' },
    { name: 'Heathrow Airport', image: '../../assets/slider/img4.webp', country: 'United Kingdom' },
    { name: 'Charles de Gaulle Airport', image: '../../assets/slider/img1.webp', country: 'France' },
    { name: 'Tokyo Haneda Airport', image: '../../assets/slider/img3.webp', country: 'Japan' },
    { name: 'Sydney Kingsford Smith Airport', image: '../../assets/slider/img2.webp', country: 'Australia' },
    { name: 'Dubai International Airport', image: '../../assets/slider/img1.webp', country: 'UAE' }
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
}
