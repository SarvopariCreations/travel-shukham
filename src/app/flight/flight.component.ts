import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../hotel/filter/filter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComparePriceModalComponent } from './compare-price-modal/compare-price-modal.component';
import { SearchFlightComponent } from '../common/search-flight/search-flight.component';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [HeaderComponent, FilterComponent, CommonModule, FormsModule, ComparePriceModalComponent, SearchFlightComponent],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightComponent {

  constructor(private renderer: Renderer2) {}


  activeTab: string = 'details';

  setActiveTab(tab: string): void {
      this.activeTab = tab;
  }

  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }


  flightFilterData = [
    {
      key: 'customerRatings',
      title: 'Recommended filters',
      options: [
        { id: 'rating1', value: '9+', label: 'Exceptional: 9.0+', price:'12212' },
        { id: 'rating2', value: '8+', label: 'Very Good: 8.0+', price:'1221' },
        { id: 'rating3', value: '7+', label: 'Good: 7.0+', price:'1222' }
      ]
    },
    {
      key: 'Bags',
      title: 'Bags',
      options: [
        { id: 'rating1', value: '9+', label: 'Includes carry-on bag', price:'₹14,732' },
        { id: 'rating2', value: '8+', label: 'Includes checked bag', price:'₹12,732' },        
      ]
    },
    {
      key: 'Airlines',
      title: 'Airlines',
      options: [
        { id: 'rating1', value: '9+', label: 'All airlines' },
        { id: 'rating2', value: '8+', label: 'Air india Express', price:'₹14,732' },
        { id: 'rating3', value: '7+', label: 'IndiGo', price:'₹14,12' }
      ]
    },
    {
      key: 'Cabin',
      title: 'Cabin',
      options: [
        { id: 'rating1', value: '9+', label: 'All cabins'},
        { id: 'rating2', value: '8+', label: 'Economy'},
        { id: 'rating3', value: '7+', label: 'Business'}
      ]
    }
    // Add more filter sections as needed
  ];

  recentSearches = [
    { city: 'Chennai, India', code: 'MAA', airport: 'Chennai International Airport' }
  ];

  popularCities = [
    { city: 'Chennai, India', code: 'CHH', airport: 'Chennai International Airport' },
    { city: 'Mumbai, India', code: 'BOM', airport: 'Chhatrapati Shivaji Maharaj International Airport' },
    { city: 'Delhi, India', code: 'DEL', airport: 'Indira Gandhi International Airport' }
  ];

  // For search filtering
  searchQuery = '';
  filteredCities = [...this.popularCities];

  // Method to filter cities based on search query
  filterSearch() {
    this.filteredCities = this.popularCities.filter((city) =>
      city.city.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      city.code.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  isFModalOpen: boolean = false;
  isFareModelOpen: boolean = false;
  
  openFlightModal() {
    this.isFModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeFlightModal() {
    this.isFModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
}
