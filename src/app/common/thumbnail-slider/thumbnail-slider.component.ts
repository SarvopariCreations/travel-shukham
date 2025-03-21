import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import $ from 'jquery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-thumbnail-slider',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule],
  templateUrl: './thumbnail-slider.component.html',
  styleUrl: './thumbnail-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThumbnailSliderComponent {
  customOptions: OwlOptions = {
    items: 1,
    loop: false,
    autoplay: false,
    dots: false,
    margin: 10,
    nav: true,
    navSpeed: 100,
    animateOut: 'slider',
    navText: ["<img src='../../assets/arrow-back-.svg' />", "<img src='../../assets/arrow-right.svg' />"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
}