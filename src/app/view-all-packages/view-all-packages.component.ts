import { Component } from '@angular/core';
import { ThumbnailSliderComponent } from '../thumbnail-slider/thumbnail-slider.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all-packages',
  standalone: true,
  imports: [ThumbnailSliderComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './view-all-packages.component.html',
  styleUrl: './view-all-packages.component.scss'
})
export class ViewAllPackagesComponent {
  imageSet5 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'life Dubai - UAE', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Land Australia', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'The New Land', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Signapore', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img5.jpg', title: 'Magical Turkey', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Azerbe', price: false, rating: false, description: false, exclusive: false },
  ];

  hotels = [
    {
      imgSrc: '../../assets/slider/img3.webp',
      name: 'Mountain View Resort, Manali',
      location: 'Resort in Manali • 1.0 km from Mall Road',
      rating: 4.7,
      reviewCount: 950,
      price: 30000,
      taxesAndFees: 5500
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
      name: 'Beachside Hotel, Kerala',
      location: 'Hotel in Kerala • 0.2 km from Varkala Beach',
      rating: 4.9,
      reviewCount: 1100,
      price: 28000,
      taxesAndFees: 5200
    },
    {
      imgSrc: '../../assets/slider/img4.webp',
      name: 'City Lights Hotel, Mumbai',
      location: 'Hotel in Mumbai • 1.5 km from Marine Drive',
      rating: 4.6,
      reviewCount: 800,
      price: 35000,
      taxesAndFees: 6000
    },
    {
      imgSrc: '../../assets/slider/img2.webp',
      name: 'Desert Oasis, Jaisalmer',
      location: 'Resort in Jaisalmer • 2.0 km from Jaisalmer Fort',
      rating: 4.8,
      reviewCount: 900,
      price: 32000,
      taxesAndFees: 5800
    },
    {
      imgSrc: '../../assets/slider/img1.webp',
      name: 'Hilltop Retreat, Shimla',
      location: 'Hotel in Shimla • 0.8 km from The Ridge',
      rating: 4.7,
      reviewCount: 850,
      price: 27000,
      taxesAndFees: 5000
    },
    {
      imgSrc: '../../assets/slider/img3.webp',
      name: 'Lakeside Inn, Nainital',
      location: 'Hotel in Nainital • 0.3 km from Naini Lake',
      rating: 4.9,
      reviewCount: 1000,
      price: 26000,
      taxesAndFees: 4800
    },
    {
      imgSrc: '../../assets/slider/img4.webp',
      name: 'Royal Palace, Jaipur',
      location: 'Hotel in Jaipur • 1.0 km from Hawa Mahal',
      rating: 4.6,
      reviewCount: 780,
      price: 34000,
      taxesAndFees: 6200
    }
  ];
}
