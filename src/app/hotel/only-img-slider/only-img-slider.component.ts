import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-only-img-slider',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule],
  templateUrl: './only-img-slider.component.html',
  styleUrl: './only-img-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OnlyImgSliderComponent {
@Input() images: any[] = [];
@Input() showTitleAndPrice: boolean = true;
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    margin: 20,
    nav: true,
    navSpeed: 100,
    animateOut: 'fade',
    navText: ["<img src='../../assets/arrow-back-.svg' />", "<img src='../../assets/arrow-right.svg' />"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
