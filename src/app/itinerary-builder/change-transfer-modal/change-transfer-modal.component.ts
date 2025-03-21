import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-transfer-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-transfer-modal.component.html',
  styleUrl: './change-transfer-modal.component.scss'
})
export class ChangeTransferModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  cards = [
    {
      id: 1,
      image: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png',
      type: 'Pro Sedan (or Similar)',
      description: 'Private Transfer/Pro Sedan',
      facilities: [
        { icon: 'airline_seat_recline_normal', text: '3 seater' },
        { icon: 'airwave', text: 'AC' },
        { icon: 'local_mall', text: '2 luggage bags' },
        { icon: 'star', text: 'Daily Water Bottle' },
        { icon: 'star', text: 'Mobile Charger' }
      ],
      details: 'Intercity Transfer; Airport Transfer; 9 Sightseeing Transfers Included',
      price: 794,
      isSelected: true // First card highlighted
    },
    {
      id: 2,
      image: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png',
      type: 'Standard Sedan',
      description: 'Shared Transfer/Standard Sedan',
      facilities: [
        { icon: 'airline_seat_recline_normal', text: '4 seater' },
        { icon: 'airwave', text: 'AC' },
        { icon: 'local_mall', text: '3 luggage bags' }
      ],
      details: 'Only Sightseeing Transfers Included',
      price: 599,
      isSelected: false
    },
    {
      id: 2,
      image: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png',
      type: 'Standard Sedan',
      description: 'Shared Transfer/Standard Sedan',
      facilities: [
        { icon: 'airline_seat_recline_normal', text: '4 seater' },
        { icon: 'airwave', text: 'AC' },
        { icon: 'local_mall', text: '3 luggage bags' }
      ],
      details: 'Only Sightseeing Transfers Included',
      price: 599,
      isSelected: false
    },
    {
      id: 2,
      image: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/Sedan_2.png',
      type: 'Standard Sedan',
      description: 'Shared Transfer/Standard Sedan',
      facilities: [
        { icon: 'airline_seat_recline_normal', text: '4 seater' },
        { icon: 'airwave', text: 'AC' },
        { icon: 'local_mall', text: '3 luggage bags' }
      ],
      details: 'Only Sightseeing Transfers Included',
      price: 599,
      isSelected: false
    }
    // Add more cards as needed
  ];

  selectCard(cardId: number) {
    this.cards.forEach(card => (card.isSelected = card.id === cardId));
  }
}
