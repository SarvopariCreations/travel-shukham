import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { RequestCallbackComponent } from '../request-callback/request-callback.component';

@Component({
  selector: 'app-hotel-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hotel-filter.component.html',
  styleUrl: './hotel-filter.component.scss'
})
export class HotelFilterComponent {

    @ViewChild('commonModal') commonModal!: RequestCallbackComponent;
    @ViewChild('searchSection', { static: true }) searchSectionRef!: ElementRef | undefined;
  
    @ViewChildren('customSelectWrap') customSelectWraps!: QueryList<ElementRef>;
    @ViewChildren('selectInput') selectInputs!: QueryList<ElementRef>;

    rooms = [{ adults: 2, children: 0 }];
    repeatCount = Array(12).fill(0); 
    
 constructor(private router: Router, private renderer: Renderer2, private eRef: ElementRef) { }

  // Open modal
  openModal(): void {
    this.commonModal.open();
  }

  // Handle save action in modal
  handleSave(): void {
    console.log('Modal save button clicked!');
  }

  isHotelSectionVisible = false;
  isFlightSectionVisible = false;
  isCruiseSectionVisible = false;
  activeSection: string = 'specific';

  // Toggle visibility of sections
  toggleSection(section: string) {
    if (section === 'hotel') {
      this.isHotelSectionVisible = !this.isHotelSectionVisible;
      this.isFlightSectionVisible = false;
      this.isCruiseSectionVisible = false;
    } else if (section === 'flight') {
      this.isFlightSectionVisible = !this.isFlightSectionVisible;
      this.isHotelSectionVisible = false;
      this.isCruiseSectionVisible = false;
    } else if (section === 'cruise') {
      this.isCruiseSectionVisible = !this.isCruiseSectionVisible;
      this.isHotelSectionVisible = false;
      this.isFlightSectionVisible = false;
    }
  }

  // Close hotel section
  closeHotelSection() {
    this.isHotelSectionVisible = false;
  }

  // Handle click inside dropdown
  onClickInside(event: Event) {
    event.stopPropagation();
  }

  // Close all sections
  closeAllSections() {
    this.isHotelSectionVisible = false;
    this.isFlightSectionVisible = false;
    this.isCruiseSectionVisible = false;
  }

  // Handle click outside dropdowns
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.custom-select-dropdown')) {
      this.closeAllSections();
    }
  }

  // Select active section
  selectSection(section: string): void {
    this.activeSection = section;
  }

  // Add a new room
  addRoom() {
    this.rooms.push({ adults: 2, children: 0 });
  }

  // Remove a room
  removeRoom(index: number) {
    if (this.rooms.length > 1) {
      this.rooms.splice(index, 1);
    } else {
      alert('You must have at least one room.');
    }
  }
}
