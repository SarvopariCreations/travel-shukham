import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-hotel-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-hotel-modal.component.html',
  styleUrl: './change-hotel-modal.component.scss'
})
export class ChangeHotelModalComponent {
  @Output() close = new EventEmitter<void>();

  closeHotelModal() {
    this.close.emit();
  }

  hotels = [
    {
      id: 1,
      image: 'https://r1imghtlak.mmtcdn.com/a4594a6c578f11ea85530242ac110007.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg',
      rating: 4.2,
      name: 'Lake Forest Munnar By Hawk Hospitality',
      stars: 3,
      location: 'Muthuvaankudi',
      date: 'Sun, 2 Feb 2025 - Tue, 4 Feb 2025',
      includes: 'Breakfast',
      roomType: 'Standard Non AC - Holidays Selection',
      price: 4894,
      isSelected: false // Tracks the selected card
    },
    {
      id: 2,
      image: 'https://r1imghtlak.mmtcdn.com/a4594a6c578f11ea85530242ac110007.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg',
      rating: 4.5,
      name: 'Mountain View Resort',
      stars: 4,
      location: 'Hilltop Area',
      date: 'Wed, 5 Feb 2025 - Fri, 7 Feb 2025',
      includes: 'All Meals',
      roomType: 'Deluxe AC - Executive Suite',
      price: 6899,
      isSelected: false
    },
    {
      id: 2,
      image: 'https://r1imghtlak.mmtcdn.com/a4594a6c578f11ea85530242ac110007.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg',      rating: 4.5,
      name: 'Mountain View Resort',
      stars: 4,
      location: 'Hilltop Area',
      date: 'Wed, 5 Feb 2025 - Fri, 7 Feb 2025',
      includes: 'All Meals',
      roomType: 'Deluxe AC - Executive Suite',
      price: 6899,
      isSelected: false
    },
    {
      id: 2,
      image: 'https://r1imghtlak.mmtcdn.com/a4594a6c578f11ea85530242ac110007.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg',      rating: 4.5,
      name: 'Mountain View Resort',
      stars: 4,
      location: 'Hilltop Area',
      date: 'Wed, 5 Feb 2025 - Fri, 7 Feb 2025',
      includes: 'All Meals',
      roomType: 'Deluxe AC - Executive Suite',
      price: 6899,
      isSelected: false
    },
    {
      id: 2,
      image: 'https://r1imghtlak.mmtcdn.com/a4594a6c578f11ea85530242ac110007.jpg?&downsize=900:675&crop=900:675;56,0&output-format=jpg',      rating: 4.5,
      name: 'Mountain View Resort',
      stars: 4,
      location: 'Hilltop Area',
      date: 'Wed, 5 Feb 2025 - Fri, 7 Feb 2025',
      includes: 'All Meals',
      roomType: 'Deluxe AC - Executive Suite',
      price: 6899,
      isSelected: false
    }
  ];

  selectHotel(hotelId: number) {
    this.hotels.forEach(hotel => (hotel.isSelected = hotel.id === hotelId));
  }
}
