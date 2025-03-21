import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Renderer2 , Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-flight.component.html',
  styleUrl: './search-flight.component.scss'
})
export class SearchFlightComponent implements AfterViewInit {
  public selected: any;
  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}
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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach((dropdown) => {
        this.renderer.listen(dropdown, 'click', (event) => {
          event.stopPropagation();
        });
      });
    }
  }

  filteredCitiess() {
    return this.cities.filter(city => city.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

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

  cities = [
    { name: 'New York', image: '../../assets/slider/img1.webp' },
    { name: 'Los Angeles', image: '../../assets/slider/img2.webp' },
    { name: 'Chicago', image: '../../assets/slider/img3.webp' },
    { name: 'Houston', image: '../../assets/slider/img1.webp' },
    { name: 'Phoenix', image: '../../assets/slider/img2.webp' },
    { name: 'Philadelphia', image: '../../assets/slider/img3.webp' },
    { name: 'San Antonio', image: '../../assets/slider/img1.webp' },
    { name: 'San Diego', image: '../../assets/slider/img2.webp' },
    { name: 'Dallas', image: '../../assets/slider/img3.webp' },
    { name: 'San Jose', image: '../../assets/slider/img1.webp' },
    { name: 'Austin', image: '../../assets/slider/img2.webp' },
    { name: 'Jacksonville', image: '../../assets/slider/img3.webp' },
    { name: 'Fort Worth', image: '../../assets/slider/img1.webp' },
    { name: 'Columbus', image: '../../assets/slider/img2.webp' },
    { name: 'Charlotte', image: '../../assets/slider/img3.webp' },
    // Add more cities as needed
  ];

  fareOptions = [
    { type: 'Regular', description: 'Regular fares' },
    { type: 'Student', description: 'Extra discounts/baggage' },
    { type: 'Senior Citizen', description: 'up to ₹600 off' },
    { type: 'Armed Forces', description: 'up to ₹600 off' },
    { type: 'Doctor and Nurses', description: 'up to ₹600 off' }
  ];
  
  selectedFare = 'Regular';
  
  selectFare(fare: any) {
    this.selectedFare = fare.type;
  }
}
