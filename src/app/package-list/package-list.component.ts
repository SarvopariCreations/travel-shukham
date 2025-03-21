import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ThumbnailSliderComponent } from "../thumbnail-slider/thumbnail-slider.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { FilterComponent } from '../hotel/filter/filter.component';

@Component({
  selector: 'app-package-list',
  standalone: true,
  imports: [HeaderComponent, ThumbnailSliderComponent, FooterComponent, RouterModule, FilterComponent],
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PackageListComponent {
  class = 'red';
  imageSet3 = [
    {
      src: '../../assets/slider/img.webp', title: false, price: false, rating: false, description: false, exclusive: false
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
}
