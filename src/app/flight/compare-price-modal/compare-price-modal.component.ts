import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-compare-price-modal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './compare-price-modal.component.html',
  styleUrl: './compare-price-modal.component.scss'
})
export class ComparePriceModalComponent {
  @Output() close = new EventEmitter<void>();

  closeHotelModal() {
    this.close.emit();
  }

 
  fareCards = [
    {
      "id": 1,
      "title": "TS SPECIAL",
      "fare": "₹ 14,754",
      "fareBy": "FARE BY TravelSukam",
      "baggage": ["7 Kgs Cabin Baggage", "15 Kgs Check-in Baggage"],
      "flexibility": [
        "Cancellation fee starts at ₹ 4,279 (up to 4 hours before departure)",
        "Free Date Change"
      ],
      "seatsMeals": ["Chargeable Seats", "Chargeable Meals"],
      "benefits": "₹ 2,999",
      "offer": "Get FLAT ₹ 243 OFF using code MMTSUPER"
    },
    {
      "id": 2,
      "title": "DELUXE SPECIAL",
      "fare": "₹ 18,500",
      "fareBy": "FARE BY TravelDeluxe",
      "baggage": ["10 Kgs Cabin Baggage", "20 Kgs Check-in Baggage"],
      "flexibility": [
        "Cancellation fee starts at ₹ 5,000 (up to 6 hours before departure)",
        "Free Date Change"
      ],
      "seatsMeals": ["Free Seats", "Chargeable Meals"],
      "benefits": "₹ 3,500",
      "offer": "Get FLAT ₹ 300 OFF using code DELUXE300"
    },
    {
      "id": 3,
      "title": "ECONOMY SPECIAL",
      "fare": "₹ 12,300",
      "fareBy": "FARE BY TravelEconomy",
      "baggage": ["5 Kgs Cabin Baggage", "10 Kgs Check-in Baggage"],
      "flexibility": [
        "Cancellation fee starts at ₹ 3,000 (up to 2 hours before departure)",
        "No Date Change"
      ],
      "seatsMeals": ["Chargeable Seats", "Chargeable Meals"],
      "benefits": "₹ 1,500",
      "offer": "Get FLAT ₹ 200 OFF using code ECONOMY200"
    }
  ]
  

}
