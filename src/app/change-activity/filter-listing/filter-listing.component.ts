import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PackageCardComponent } from '../../common/package-card/package-card.component';
import { Package } from '../../common/package-card/package.model';

@Component({
  selector: 'app-filter-listing',
  standalone: true,
  imports: [CommonModule, PackageCardComponent],
  templateUrl: './filter-listing.component.html',
  styleUrl: './filter-listing.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FilterListingComponent {
  packagesData: Package[] = [
    {
      imgSrc: '../../assets/slider/pexels-4.jpeg',
      location: 'Egypt',
      destinations: ['Saint Martin', 'Khagrachori', 'Cox’s Bazar', 'Bandar ban'],
      title: 'Discover Serenity, Exploration, and Enlightenment.',
      price: 340,
      originalPrice: 450,
      currency: '$',
    }, 
    {
      imgSrc: '../../assets/slider/pexels-5.jpeg',
      location: 'Franch',
      destinations: ['Saint Martin', 'Khagrachori', 'Cox’s Bazar', 'Bandar ban'],
      title: 'Discover Serenity, Exploration, and Enlightenment.',
      price: 140,
      originalPrice: 450,
      currency: '$',
    },   
    {
      imgSrc: '../../assets/slider/pexels-3.jpeg',
      location: 'Europe',
      destinations: ['Saint Martin', 'Khagrachori', 'Cox’s Bazar', 'Bandar ban'],
      title: 'Discover Serenity, Exploration, and Enlightenment.',
      price: 240,
      originalPrice: 450,
      currency: '$',
    },    
    {
      imgSrc: '../../assets/slider/pexels-5.jpeg',
      location: 'Franch',
      destinations: ['Saint Martin', 'Khagrachori', 'Cox’s Bazar', 'Bandar ban'],
      title: 'Discover Serenity, Exploration, and Enlightenment.',
      price: 140,
      originalPrice: 450,
      currency: '$',
    },   
    {
      imgSrc: '../../assets/slider/pexels-3.jpeg',
      location: 'Europe',
      destinations: ['Saint Martin', 'Khagrachori', 'Cox’s Bazar', 'Bandar ban'],
      title: 'Discover Serenity, Exploration, and Enlightenment.',
      price: 240,
      originalPrice: 450,
      currency: '$',
    },    
    // More package data...
  ];
}
