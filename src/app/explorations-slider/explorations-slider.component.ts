import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { BackArrowComponent } from '../common/back-arrow/back-arrow.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explorations-slider',
  standalone: true,
  imports: [CarouselModule, FormsModule, CommonModule, BackArrowComponent, RouterModule],
  templateUrl: './explorations-slider.component.html',
  styleUrl: './explorations-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExplorationsSliderComponent {
  customOptions: OwlOptions = {
    items: 1,
    loop: false,
    autoplay: false,
    dots: false,
    margin: 20,
    nav: true,
    navSpeed: 100,
    animateOut: 'slider',
    navText: ["<img src='../../assets/arrow-next.svg' />", "<img src='../../assets/arrow-back.svg' />"],
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

