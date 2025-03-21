import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-city-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-city-modal.component.html',
  styleUrl: './add-city-modal.component.scss'
})
export class AddCityModalComponent {
  @Input() title: string = 'Add City';
  @Input() message: string = '';

  @Output() close = new EventEmitter<void>();

  closeCityModal() {
    this.close.emit();
  }

  // closeModal() {
  //   this.close.emit();
  // }
  // items = [
  //   { name: 'Arrival at DPS', type: 'static' },
  //   { name: 'Nusa Penida', type: 'ferry' },
  //   { name: 'Transfer to Canggu', type: 'static' },
  //   { name: 'Canggu', type: 'ferry' },
  //   { name: 'Transfer to ferry', type: 'static' },
  //   { name: 'Kuta', type: 'ferry' },
  //   { name: 'Transfer to car', type: 'static' },
  // ];

  getIcon(name: string): string {
    switch (name) {
      case 'Arrival at DPS':
        return 'flight_land';
      case 'Transfer to Canggu':
        return 'directions_car';
      case 'Transfer to ferry':
        return 'directions_boat';
      default:
        return 'location_on';
    }
  }

  items = [
    { icon: 'flight_land', text: 'Arrival at DPS', location: 'Nusa Penida', count: 1 },
    { icon: 'directions_boat', text: 'Transfer to ferry', location: 'Kuta', count: 1 },
    { icon: 'directions_car', text: 'Transfer to car', location: 'Canggu', count: 1 }
    // Add more items as needed
  ];

  // Function to swap elements
  swapItems(array: any[], fromIndex: number, toIndex: number) {
    const temp = array[fromIndex];
    array[fromIndex] = array[toIndex];
    array[toIndex] = temp;
  }

}
