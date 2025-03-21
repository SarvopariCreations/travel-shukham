import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import $ from 'jquery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {
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