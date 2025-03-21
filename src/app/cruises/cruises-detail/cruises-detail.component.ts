import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ThumbnailSliderComponent } from '../../thumbnail-slider/thumbnail-slider.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { RouterModule } from '@angular/router';
declare var bootstrap: any;
export interface TripDetail {
  title: string;
  nights: number;
  day: string;
  time: string;
  description1: string;
  description2: string;
  inclusions: { iconPath: string; text: string }[];
}
@Component({
  selector: 'app-customize-view',
  standalone: true,
  imports: [HeaderComponent, ThumbnailSliderComponent, CommonModule, FooterComponent, RouterModule],
  templateUrl: './cruises-detail.component.html',
  styleUrl: './cruises-detail.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CruisesDetailComponent implements OnInit {

  tripDetails: TripDetail[] = [];
  months: any[] = [];

  ngOnInit(): void {

    const data = [
      { month: 'Jan', year: 2025, status: 'sold', price: null },
      { month: 'Feb', year: 2025, status: 'available', price: 45000 },
      { month: 'Mar', year: 2025, status: 'available', price: 46000 },
      { month: 'Apr', year: 2025, status: 'sold', price: null },
      { month: 'May', year: 2025, status: 'available', price: 47000 },
      { month: 'Jun', year: 2025, status: 'sold', price: null },
      { month: 'Jul', year: 2025, status: 'available', price: 48000 },
      { month: 'Aug', year: 2025, status: 'sold', price: null },
      { month: 'Sep', year: 2025, status: 'available', price: 49000 },
      { month: 'Oct', year: 2025, status: 'sold', price: null },
      { month: 'Nov', year: 2025, status: 'available', price: 50000 },
      { month: 'Dec', year: 2025, status: 'sold', price: null },
    ];
    
    this.months = data;

    this.tripDetails = [
      {
        title: 'Istanbul',
        nights: 1,
        day: 'Day 1',
        time: 'Morning',
        description1: 'Welcome to Istanbul! A city born from a blend of European and Asian influences, Istanbul is full of intriguing sights and ancient wonders, from its spellbinding architecture to its exceptional cuisine.',
        description2: 'Upon arrival at Istanbul Airport (IST), you’ll be greeted and transferred to your hotel in time for a welcome meeting with your fellow travellers and an enticing dinner at a local restaurant.',
        inclusions: [
          { iconPath: 'M20 3.5H4a3 3 0 0 0-3 3v13a1 1 0 0 0 1 1h4a.9995.9995 0 0 0 .83-.45l1.71-2.55h6.92l1.71 2.55a.9998.9998 0 0 0 .83.45h4a1.0001 1.0001 0 0 0 1-1v-13a3 3 0 0 0-3-3Zm1 15h-2.46L16.83 16a.9994.9994 0 0 0-.83-.5H8a1.0006 1.0006 0 0 0-.83.45L5.46 18.5H3v-5h18v5Zm-14-7v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7Zm6 0v-1a1.0002 1.0002 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 0h-2v-1a3 3 0 0 0-3-3h-2a2.9998 2.9998 0 0 0-2 .78 2.9998 2.9998 0 0 0-2-.78H8a3 3 0 0 0-3 3v1H3v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5Z', text: 'Barceló Istanbul (Superior Room) or similar' },
          { iconPath: 'M16.84 11.63a3.002 3.002 0 0 0 1.169-.2215A3.0023 3.0023 0 0 0 19 10.75l2.83-2.83a1.0002 1.0002 0 0 0-.3254-1.629 1.0003 1.0003 0 0 0-1.0946.219l-2.86 2.82a1.001 1.001 0 0 1-.71.2958 1.0005 1.0005 0 0 1-.71-.2958l3.54-3.53a1.0035 1.0035 0 0 0 .2941-.71 1.0034 1.0034 0 0 0-.2941-.71 1.0041 1.0041 0 0 0-1.42 0l-3.53 3.54a.9998.9998 0 0 1 0-1.41l2.83-2.83a1.0036 1.0036 0 0 0 .2941-.71 1.0034 1.0034 0 0 0-.2941-.71 1.0041 1.0041 0 0 0-1.42 0L13.3 5.09a3 3 0 0 0 0 4.24L12 10.62l-8.27-8.3-.1-.06a.7101.7101 0 0 0-.17-.11l-.18-.07L3.16 2h-.27a.5702.5702 0 0 0-.18 0 .7.7 0 0 0-.17.09l-.16.1h-.07l-.06.1a.9998.9998 0 0 0-.11.17 1.0695 1.0695 0 0 0-.07.19v.11a11 11 0 0 0 3.11 9.34l2.64 2.63-5.41 5.4a.9986.9986 0 0 0-.2958.71 1.0003 1.0003 0 0 0 1.0058 1 1.0005 1.0005 0 0 0 .71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 0 0 2.11.89Zm-7.65 1.82-2.63-2.64A9.06 9.06 0 0 1 4 5.4l6.61 6.6-1.42 1.45Zm6.24.57A1.0076 1.0076 0 1 0 14 15.44l6.3 6.3c.191.1738.4418.2669.7.26a1.0004 1.0004 0 0 0 1.0058-1 .9998.9998 0 0 0-.2958-.71l-6.28-6.27Z', text: 'Dinner' }
        ]
      },
      {
        title: 'Istanbul',
        nights: 2,
        day: 'Day 2',
        time: 'Morning',
        description1: 'Welcome to Istanbul! A city born from a blend of European and Asian influences, Istanbul is full of intriguing sights and ancient wonders, from its spellbinding architecture to its exceptional cuisine.',
        description2: 'Upon arrival at Istanbul Airport (IST), you’ll be greeted and transferred to your hotel in time for a welcome meeting with your fellow travellers and an enticing dinner at a local restaurant.',
        inclusions: [
          { iconPath: 'M20 3.5H4a3 3 0 0 0-3 3v13a1 1 0 0 0 1 1h4a.9995.9995 0 0 0 .83-.45l1.71-2.55h6.92l1.71 2.55a.9998.9998 0 0 0 .83.45h4a1.0001 1.0001 0 0 0 1-1v-13a3 3 0 0 0-3-3Zm1 15h-2.46L16.83 16a.9994.9994 0 0 0-.83-.5H8a1.0006 1.0006 0 0 0-.83.45L5.46 18.5H3v-5h18v5Zm-14-7v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7Zm6 0v-1a1.0002 1.0002 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 0h-2v-1a3 3 0 0 0-3-3h-2a2.9998 2.9998 0 0 0-2 .78 2.9998 2.9998 0 0 0-2-.78H8a3 3 0 0 0-3 3v1H3v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5Z', text: 'Barceló Istanbul (Superior Room) or similar' },
          { iconPath: 'M16.84 11.63a3.002 3.002 0 0 0 1.169-.2215A3.0023 3.0023 0 0 0 19 10.75l2.83-2.83a1.0002 1.0002 0 0 0-.3254-1.629 1.0003 1.0003 0 0 0-1.0946.219l-2.86 2.82a1.001 1.001 0 0 1-.71.2958 1.0005 1.0005 0 0 1-.71-.2958l3.54-3.53a1.0035 1.0035 0 0 0 .2941-.71 1.0034 1.0034 0 0 0-.2941-.71 1.0041 1.0041 0 0 0-1.42 0l-3.53 3.54a.9998.9998 0 0 1 0-1.41l2.83-2.83a1.0036 1.0036 0 0 0 .2941-.71 1.0034 1.0034 0 0 0-.2941-.71 1.0041 1.0041 0 0 0-1.42 0L13.3 5.09a3 3 0 0 0 0 4.24L12 10.62l-8.27-8.3-.1-.06a.7101.7101 0 0 0-.17-.11l-.18-.07L3.16 2h-.27a.5702.5702 0 0 0-.18 0 .7.7 0 0 0-.17.09l-.16.1h-.07l-.06.1a.9998.9998 0 0 0-.11.17 1.0695 1.0695 0 0 0-.07.19v.11a11 11 0 0 0 3.11 9.34l2.64 2.63-5.41 5.4a.9986.9986 0 0 0-.2958.71 1.0003 1.0003 0 0 0 1.0058 1 1.0005 1.0005 0 0 0 .71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 0 0 2.11.89Zm-7.65 1.82-2.63-2.64A9.06 9.06 0 0 1 4 5.4l6.61 6.6-1.42 1.45Zm6.24.57A1.0076 1.0076 0 1 0 14 15.44l6.3 6.3c.191.1738.4418.2669.7.26a1.0004 1.0004 0 0 0 1.0058-1 .9998.9998 0 0 0-.2958-.71l-6.28-6.27Z', text: 'Dinner' }
        ]
      },
      {
        title: 'Istanbul',
        nights: 2,
        day: 'Day 3',
        time: 'Morning',
        description1: 'Welcome to Istanbul! A city born from a blend of European and Asian influences, Istanbul is full of intriguing sights and ancient wonders, from its spellbinding architecture to its exceptional cuisine.',
        description2: 'Upon arrival at Istanbul Airport (IST), you’ll be greeted and transferred to your hotel in time for a welcome meeting with your fellow travellers and an enticing dinner at a local restaurant.',
        inclusions: [
          { iconPath: 'M20 3.5H4a3 3 0 0 0-3 3v13a1 1 0 0 0 1 1h4a.9995.9995 0 0 0 .83-.45l1.71-2.55h6.92l1.71 2.55a.9998.9998 0 0 0 .83.45h4a1.0001 1.0001 0 0 0 1-1v-13a3 3 0 0 0-3-3Zm1 15h-2.46L16.83 16a.9994.9994 0 0 0-.83-.5H8a1.0006 1.0006 0 0 0-.83.45L5.46 18.5H3v-5h18v5Zm-14-7v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7Zm6 0v-1a1.0002 1.0002 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 0h-2v-1a3 3 0 0 0-3-3h-2a2.9998 2.9998 0 0 0-2 .78 2.9998 2.9998 0 0 0-2-.78H8a3 3 0 0 0-3 3v1H3v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5Z', text: 'Barceló Istanbul (Superior Room) or similar' },
          { iconPath: 'M16.84 11.63a3.002 3.002 0 0 0 1.169-.2215A3.0023 3.0023 0 0 0 19 10.75l2.83-2.83a1.0002 1.0002 0 0 0-.3254-1.629 1.0003 1.0003 0 0 0-1.0946.219l-2.86 2.82a1.001 1.001 0 0 1-.71.2958 1.0005 1.0005 0 0 1-.71-.2958l3.54-3.53a1.0035 1.0035 0 0 0 .2941-.71 1.0034 1.0034 0 0 0-.2941-.71 1.0041 1.0041 0 0 0-1.42 0l-3.53 3.54a.9998.9998 0 0 1 0-1.41l2.83-2.83a1.0036 1.0036 0 0 0 .2941-.71 1.0034 1.0034 0 0 0-.2941-.71 1.0041 1.0041 0 0 0-1.42 0L13.3 5.09a3 3 0 0 0 0 4.24L12 10.62l-8.27-8.3-.1-.06a.7101.7101 0 0 0-.17-.11l-.18-.07L3.16 2h-.27a.5702.5702 0 0 0-.18 0 .7.7 0 0 0-.17.09l-.16.1h-.07l-.06.1a.9998.9998 0 0 0-.11.17 1.0695 1.0695 0 0 0-.07.19v.11a11 11 0 0 0 3.11 9.34l2.64 2.63-5.41 5.4a.9986.9986 0 0 0-.2958.71 1.0003 1.0003 0 0 0 1.0058 1 1.0005 1.0005 0 0 0 .71-.29l6.07-5.98 2.83-2.83 2-2a3 3 0 0 0 2.11.89Zm-7.65 1.82-2.63-2.64A9.06 9.06 0 0 1 4 5.4l6.61 6.6-1.42 1.45Zm6.24.57A1.0076 1.0076 0 1 0 14 15.44l6.3 6.3c.191.1738.4418.2669.7.26a1.0004 1.0004 0 0 0 1.0058-1 .9998.9998 0 0 0-.2958-.71l-6.28-6.27Z', text: 'Dinner' }
        ]
      },
      // Add more trip details here...
    ];
  }
  imageSet1 = [
    { src: '../../assets/slider/pexels-2.jpeg', title: 'Cultural Paradise - Bali', price: 'Booked By 12+ Travellers', rating: true, description: true, exclusive: true },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'The Kingdom Thailand', price: 'Booked By 18+ Travellers', rating: true, description: true, exclusive: true },
    { src: '../../assets/slider/pexels-3.jpeg', title: 'Momery in Maldives', price: 'Booked By 48+ Travellers', rating: true, description: true, exclusive: true },
    { src: '../../assets/slider/pexels-5.jpeg', title: 'Land of vietnam', price: 'Booked By 90+ Travellers', rating: true, description: true, exclusive: true },
    { src: '../../assets/slider/img5.jpg', title: 'love Shrilanka', price: 'Booked By 18+ Travellers', rating: true, description: true, exclusive: true },
  ];

  title = 'Add City';
  message = 'This is a common modal dialog.';

  openModal(): void {
    const modalElement = document.getElementById('commonModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  isSoldOutListVisible: boolean = false;

  toggleSoldOutList() {
    this.isSoldOutListVisible = !this.isSoldOutListVisible;
  }

  isSoldOutWrapVisible: boolean = false;

  openSoldOutWrap() {
    this.isSoldOutWrapVisible = true; // Show the sold-out wrap section
  }

  closeSoldOutWrap() {
    this.isSoldOutWrapVisible = false; // Hide the sold-out wrap section
  }



  isScrolled = false;
  activeSection = '';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Check if the scroll position is greater than 100px
    this.isScrolled = scrollPosition > 100;
    this.updateActiveSection();
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  updateActiveSection() {
    const sections = ['overview', 'itinerary', 'highlights', 'variations', 'dates', 'things'];
    const threshold = window.innerHeight / 2; // Center of the viewport

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }



  cruises = [
    {
      imgSrc: '../../assets/cruises/cruise.avif',
      name: 'Caribbean Cruise Adventure',
      location: 'Cruise in the Caribbean • 7 Nights',
      rating: 4.8,
      reviewCount: 1520,
      price: 85000,
      taxesAndFees: 15000
    },
    {
      imgSrc: '../../assets/cruises/cruise1.avif',
      name: 'Mediterranean Luxury Cruise',
      location: 'Cruise in the Mediterranean • 14 Nights',
      rating: 4.9,
      reviewCount: 1980,
      price: 195000,
      taxesAndFees: 22000
    },
    {
      imgSrc: '../../assets/cruises/cruise2.avif',
      name: 'Alaskan Glacier Cruise',
      location: 'Cruise in Alaska • 10 Nights',
      rating: 4.7,
      reviewCount: 2400,
      price: 125000,
      taxesAndFees: 17000
    },
    {
      imgSrc: '../../assets/cruises/cruise3.avif',
      name: 'European Grand Tour',
      location: 'Cruise in Europe • 12 Days',
      rating: 4.6,
      reviewCount: 1850,
      price: 140000,
      taxesAndFees: 20000
    },
    {
      imgSrc: '../../assets/cruises/cruise4.avif',
      name: 'African Safari Expedition',
      location: 'Cruise in Africa • 8 Days',
      rating: 4.8,
      reviewCount: 2100,
      price: 175000,
      taxesAndFees: 25000
    },
    {
      imgSrc: '../../assets/cruises/cruise5.avif',
      name: 'Antarctic Adventure Cruise',
      location: 'Cruise in Antarctica • 15 Days',
      rating: 4.9,
      reviewCount: 950,
      price: 300000,
      taxesAndFees: 35000
    },
    {
      imgSrc: '../../assets/cruises/cruise6.avif',
      name: 'Asian Explorer Cruise',
      location: 'Cruise in Asia • 10 Nights',
      rating: 4.7,
      reviewCount: 1200,
      price: 110000,
      taxesAndFees: 18000
    },
    {
      imgSrc: '../../assets/cruises/cruise7.avif',
      name: 'South Pacific Paradise Cruise',
      location: 'Cruise in the South Pacific • 12 Nights',
      rating: 4.8,
      reviewCount: 1350,
      price: 160000,
      taxesAndFees: 20000
    }
  ];

      // Add a new room
      addRoom() {
        this.rooms.push({ adults: 2, children: 0 });
      }
      rooms = [{ adults: 2, children: 0 }];
      repeatCount = Array(12).fill(0); // Assuming 12 months for the "Anytime" section
      // Remove a room
      removeRoom(index: number) {
        if (this.rooms.length > 1) {
          this.rooms.splice(index, 1);
        } else {
          alert('You must have at least one room.');
        }
      }
}
