import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { Package } from './package.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
  standalone:true,
  imports:[CommonModule, PackageCardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PackageCardComponent {
  @Input() packages: Package[] = [
    {
      imgSrc: '../../assets/slider/pexels-4.jpeg',
      location: 'Egypt',
      destinations: ['Saint Martin', 'Khagrachori', 'Cox’s Bazar', 'Bandar ban'],
      title: 'Discover Serenity, Exploration, and Enlightenment.',
      price: 340,
      originalPrice: 450,
      currency: '$',
    }   
    // Add more packages as needed
  ];
}
