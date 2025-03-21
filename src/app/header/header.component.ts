import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSubmenu = false;
  menu: any[] = [];
  isSidebarOpen = false;
  private menuData = {
    "menu": [
      {
        "title": "Destinations",
        "subMenu": [
          {
            "title": "Maldives",
            "routerLink": "/package-list",
            "specialPlace": "Hanimoon"
          },
          {
            "title": "Bali",
            "routerLink": "/package-list",
            "specialPlace": "Tranding"
          },
          {
            "title": "Thailand",
            "routerLink": "/package-list",
            "specialPlace": "Budget"
          },
          {
            "title": "Dubai",
            "routerLink": "/package-list",
            "specialPlace": "Popular"
          },
          {
            "title": "Singapore",
            "routerLink": "/package-list",
            "specialPlace": "In season"
          },
          {
            "title": "Maldives",
            "routerLink": "/package-list"
          },
          {
            "title": "Bali",
            "routerLink": "/package-list"
          },
          {
            "title": "Thailand",
            "routerLink": "/package-list"
          },
          {
            "title": "Dubai",
            "routerLink": "/package-list"
          }
        ]
      },
      {
        "title": "Holiday Packages",
        "subMenu": [
          {
            "title": "Maldives Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Bali Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Thailand Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Dubai Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Abu Dhabi Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Yas Island Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Singapore Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Vietnam Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Europe Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Australia Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "New Zealand Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Sri Lanka Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Mauritius Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "South Africa Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Greece Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Turkey Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "UK Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "France Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Switzerland Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Italy Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Spain Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "USA Packages",
            "routerLink": "/package-list"
          }
        ]
      },
      {
        "title": "Hotels",
        "subMenu": [
          {
            "title": "Maldives Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Bali Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Thailand Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Dubai Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Singapore Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Vietnam Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Europe Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Australia Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "New Zealand Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Sri Lanka Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Mauritius Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "South Africa Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Greece Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Turkey Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "UK Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "France Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Switzerland Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Italy Honeymoon Packages",
            "routerLink": "/hotel-list"
          },
          {
            "title": "Spain Honeymoon Packages",
            "routerLink": "/hotel-list"
          }
        ]
      },
      {
        "title": "Exclusive Packages",
        "subMenu": [
          {
            "title": "Packages from Chennai",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Mumbai",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Delhi",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Bangalore",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Pune",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Ahmedabad",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Kolkata",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Kochi",
            "routerLink": "/package-list"
          },
          {
            "title": "Packages from Hyderabad",
            "routerLink": "/package-list"
          },
          {
            "title": "International Tour Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "International Honeymoon Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Family Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Luxury Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "Budget Packages",
            "routerLink": "/package-list"
          },
          {
            "title": "International Packages under 30K",
            "routerLink": "/package-list"
          },
          {
            "title": "International Packages under 40K",
            "routerLink": "/package-list"
          },
          {
            "title": "International Packages under 50K",
            "routerLink": "/package-list"
          },
          {
            "title": "International Packages under 75K",
            "routerLink": "/package-list"
          },
          {
            "title": "International Packages under 3lakhs",
            "routerLink": "/package-list"
          },
          {
            "title": "International Honeymoon under 50K",
            "routerLink": "/package-list"
          },
          {
            "title": "International Honeymoon under 1lakh",
            "routerLink": "/package-list"
          },
          {
            "title": "International Honeymoon under 2lakhs",
            "routerLink": "/package-list"
          }
        ]
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {
    this.menu = this.menuData.menu;
  }


  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSubMenu(item: any): void {
    item.isOpen = !item.isOpen;
  }
}
