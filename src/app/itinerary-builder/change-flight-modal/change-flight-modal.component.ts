import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-flight-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-flight-modal.component.html',
  styleUrl: './change-flight-modal.component.scss'
})
export class ChangeFlightModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  selectedTab: string = 'departure';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }


  flights = [
    {
      id: 1,
      airline: 'IndiGo | 6E-2345',
      price: 5400,
      logo: 'https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/AI.png?v7',
      departureDate: 'Mon, 06 Jan',
      arrivalDate: 'Mon, 06 Jan',
      departureTime: '10:30 AM',
      arrivalTime: '12:30 PM',
      from: 'New Delhi',
      to: 'Srinagar',
      baggageIcons: ['business_center', 'luggage'],
      isSelected: false // Tracks the selected flight
    },
    {
      id: 2,
      airline: 'Air India | AI-9876',
      price: 6200,
      logo: 'https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/AI.png?v7',
      departureDate: 'Tue, 07 Jan',
      arrivalDate: 'Tue, 07 Jan',
      departureTime: '2:00 PM',
      arrivalTime: '4:30 PM',
      from: 'Mumbai',
      to: 'Goa',
      baggageIcons: ['business_center', 'luggage'],
      isSelected: false
    }
  ];

  selectFlight(flightId: number) {
    this.flights.forEach(flight => (flight.isSelected = flight.id === flightId));
  }

}
