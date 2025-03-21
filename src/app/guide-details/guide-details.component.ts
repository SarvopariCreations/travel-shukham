import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThumbnailSliderComponent } from "../thumbnail-slider/thumbnail-slider.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide-details',
  standalone: true,
  imports: [HeaderComponent, ThumbnailSliderComponent, CommonModule],
  templateUrl: './guide-details.component.html',
  styleUrl: './guide-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GuideDetailsComponent {
  imageSet5 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'life Dubai - UAE', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Land Australia', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'The New Land', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Signapore', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/img5.jpg', title: 'Magical Turkey', price: false, rating: false, description: false, exclusive: false },
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Azerbe', price: false, rating: false, description: false, exclusive: false },
  ];

  activeTab: string = 'packages';
  activeTab1: string = 'Electricity';

  onTabClick1(tab: string) {
    this.activeTab1 = tab;
  }

  onTabClick(tab: string) {
    this.activeTab = tab;
  }
}
