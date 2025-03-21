import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { SliderComponent } from "../slider/slider.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-map',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, CommonModule],
  templateUrl: './search-map.component.html',
  styleUrl: './search-map.component.scss'
})
export class SearchMapComponent {
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

  imageSet6 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Hue Tour Packages', price: '₹41,406 / Per person', rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Halong Bay Tour Packages', price: '₹33,406 / Per person', rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Ho Chi Minh Tour Packages', price: '₹51,406 / Per person', rating: false, description: false, exclusive: false },
    {
      src: '../../assets/slider/pexels-5.jpeg', title: 'Hue Tour Packages', price: '₹51,406 / Per person', rating: false, description: false, exclusive: false
    },
    { src: '../../assets/slider/img5.jpg', title: 'Ho Chi Minh', price: '₹51,406 / Per person', rating: false, description: false, exclusive: false },
  ];

  options = [
    { label: 'Sun & Beach', count: 50 },
    { label: 'Family Friendly', count: 5 },
    { label: 'Romantic', count: 10 },
    { label: 'Honeymoon', count: 160 },
    { label: 'All-inclusive', count: 120 },
    { label: 'Spa Break', count: 30 },
    { label: 'Homes & vills', count: 32 }, 
    { label: 'Spa Break', count: 54 },
    { label: 'Limited Time Sukham Exclusive', count:23 },
    { label: 'Ulta', count: 10 },
    { label: 'city Break', count: 20 },
    { label: 'Wellness & Relaxation', count: 30 }, 
    { label: 'Unique Stays', count: 56 },
    { label: 'Outdoor & Adventure', count: 230 },
    { label: 'Ski & Snow', count: 40 },
    { label: 'Hill Stations', count:70 },
    { label: 'Boutique', count: 170 },
    { label: 'Adult-only', count: 120 },
    { label: 'Golf', count: 156 },
    { label: 'Outdoor Adventure', count: 90 },
    { label: 'Group', count: 675 },
    { label: 'Food & Winde', count: 23 },
    { label: 'Arts & Culture', count: 40 },
    { label: 'Last Minute Escapes', count: 64 },
    { label: 'Sustainable Travel', count: 72 },
  ];

  amenities = [
    { label: 'Garden Views', count: 50 },
    { label: 'Pricate pool', count: 500 },
    { label: 'Rain shower', count: 150 },
    { label: 'Coffee machine', count: 50 },
    { label: 'Kitchen', count: 100 },
    { label: 'Kitchenette', count: 50 },
    { label: 'City views', count: 25 }, 
    { label: 'Spa bath', count: 340 },
    { label: 'Laundry facilities', count: 67 },
    { label: 'Pool views', count: 30 },
    { label: 'Water views', count: 60 },  
    { label: 'Mountain views', count: 110 },
  ];

  sections = [
    {
      header: 'Food',
      options: [
        { label: 'Breakfast', count: 1050 },
        { label: 'Daily dining', count: 500 },
        { label: 'Unique dining experience', count: 150 }
      ]
    },
    {
      header: 'Drink',
      options: [
        { label: 'Daily drink', count: 100 },
        { label: 'Free-flow drinks', count: 200 },
        { label: 'Complimentary minibar', count: 300 }
      ]
    },
    {
      header: 'Wellness',
      options: [
        { label: 'Spa treatment', count: 50 },        
      ]
    },
    {
      header: 'Credit',
      options: [
        { label: 'Resort credit', count: 30 },
      ]
    },
    {
      header: 'Service',
      options: [
        { label: 'Late checkout/early check-in', count: 100 },
        { label: 'Kids stay free', count: 50 }        
      ]
    },
    {
      header: 'Trasport',
      options: [
        { label: 'Airport transfer', count: 100 },
      ]
    }
  ];
}
