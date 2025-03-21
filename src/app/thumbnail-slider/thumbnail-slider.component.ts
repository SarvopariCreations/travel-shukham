import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import $ from 'jquery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-thumbnail-slider',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './thumbnail-slider.component.html',
  styleUrl: './thumbnail-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThumbnailSliderComponent {
  @Input() images: any[] = [];
  @Input() showTitleAndPrice: boolean = true;
  customOptions: OwlOptions = {
    items: 1,
    loop: false,
    autoplay: false,
    dots: false,
    margin: 20,
    nav: true,
    navSpeed: 100,
    animateOut: 'fadeout',
    navText: ["<img src='../../assets/arrow-back-.svg' />", "<img src='../../assets/arrow-right.svg' />"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };


  nestedOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    margin: 10,
    nav: false,
    navSpeed: 100,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

}