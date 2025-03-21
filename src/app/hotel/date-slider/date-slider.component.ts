import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import $ from 'jquery';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-date-slider',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule],
  templateUrl: './date-slider.component.html',
  styleUrl: './date-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DateSliderComponent implements OnInit{
  @Input() images: any[] = [];
  @Input() showTitleAndPrice: boolean = true;
  nights: number[] = [];
  
  ngOnInit(): void {
    this.nights = Array.from({ length: 30 }, (_, i) => i + 1);
  }
  customOptions: OwlOptions = {
    items: 1,
    loop: false,
    autoplay: false,
    dots: false,
    margin: 20,
    nav: true,
    navSpeed: 100,
    animateOut: 'fadeout',
    autoWidth: true,
    navText: ["<img src='../../assets/arrow-back-.svg' />", "<img src='../../assets/arrow-right.svg' />"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items:8,
      },
    },
  };


  nestedOptions: OwlOptions = {
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    margin: 10,
    nav: true,
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