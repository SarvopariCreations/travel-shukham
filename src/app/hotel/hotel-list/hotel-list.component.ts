import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { FilterComponent } from '../filter/filter.component';
import { SliderComponent } from "../slider/slider.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BudgetCategoryComponent } from '../../budget-category/budget-category.component';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FilterComponent, SliderComponent, CommonModule, RouterModule, FormsModule, BudgetCategoryComponent],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HotelListComponent {
  class = 'red';
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

  packages = [
    {
      hotelLogo: '../../../assets/h-logo.png',
      title: 'JEN Singapore Orchardgateway by Shangri-La',
      description: 'Award-Winning Singapore Cosmopolitan Hideaway by Shangri-La with Rooftop Infinity Pool',
      rating: 8.0,
      reviews: 118,
      nights: 3,
      pricePerNight: 166744,
      valuedPrice: 199771,
      discount: 17,
      roomType: 'Twin room',
      images: ['assets/images/image1.webp', 'assets/images/image2.webp'],
    },
    {
      hotelLogo: '../../../assets/h-logo.png',
      title: 'Another Hotel Example',
      description: 'Another wonderful hotel description here.',
      rating: 9.2,
      reviews: 95,
      nights: 2,
      pricePerNight: 125000,
      valuedPrice: 150000,
      discount: 20,
      roomType: 'Suite',
      images: ['assets/images/image3.webp', 'assets/images/image4.webp'],
    },
    {
      hotelLogo: '../../../assets/h-logo.png',
      title: 'The Ritz-Carlton, Tokyo',
      description: 'Luxury hotel offering stunning views of the Tokyo skyline with world-class amenities.',
      rating: 9.5,
      reviews: 200,
      nights: 5,
      pricePerNight: 300000,
      valuedPrice: 350000,
      discount: 14,
      roomType: 'King room',
      images: ['assets/images/image5.webp', 'assets/images/image6.webp'],
    },
    {
      hotelLogo: '../../../assets/h-logo.png',
      title: 'Four Seasons Resort Bali',
      description: 'Experience ultimate relaxation at this serene beachfront resort in Bali.',
      rating: 8.8,
      reviews: 150,
      nights: 4,
      pricePerNight: 250000,
      valuedPrice: 280000,
      discount: 11,
      roomType: 'Villa',
      images: ['assets/images/image7.webp', 'assets/images/image8.webp'],
    },
    {
      hotelLogo: '../../../assets/h-logo.png',
      title: 'The Langham, London',
      description: 'Historic hotel in the heart of London with elegant design and impeccable service.',
      rating: 9.0,
      reviews: 175,
      nights: 3,
      pricePerNight: 200000,
      valuedPrice: 230000,
      discount: 13,
      roomType: 'Executive Suite',
      images: ['assets/images/image9.webp', 'assets/images/image10.webp'],
    },
  ];

  flightFilterData = [
    {
      key: 'customerRatings',
      title: 'Customer Ratings',
      options: [
        { id: 'rating1', value: '9+', label: 'Exceptional: 9.0+', price:'12212' },
        { id: 'rating2', value: '8+', label: 'Very Good: 8.0+', price:'1221' },
        { id: 'rating3', value: '7+', label: 'Good: 7.0+', price:'1222' }
      ]
    },
    {
      key: 'Bags',
      title: 'Type of escape',
      options: [
        { id: 'rating1', value: '9+', label: 'Homes & Villas' },
        { id: 'rating2', value: '8+', label: 'City Break'},        
        { id: 'rating2', value: '8+', label: 'Sun & Beach'},        
        { id: 'rating2', value: '8+', label: 'Family Friendly'},
        { id: 'rating2', value: '8+', label: 'Beutique'},
        { id: 'rating2', value: '8+', label: 'Honeymoon'},        
      ]
    },
    {
      key: 'Airlines',
      title: 'Transfer',
      options: [
        { id: 'rating1', value: '9+', label: 'Inlcuded' },
        { id: 'rating2', value: '8+', label: 'Not-Included'},
      ]
    },
    {
      key: 'Cabin',
      title: 'Group Type',
      options: [
        { id: 'rating1', value: '9+', label: 'Shared'},
        { id: 'rating2', value: '8+', label: 'Private'},
      ]
    }

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

  onTabClick(tab: string) {
    this.activeTab = tab;
  }
}
