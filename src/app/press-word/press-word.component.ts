import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-press-word',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './press-word.component.html',
  styleUrl: './press-word.component.scss'
})
export class PressWordComponent {
  tabs = [
    { icon: '../../assets/press/logo.avif' },
    { icon: '../../assets/press/logo1.avif' },
    { icon: '../../assets/press/logo2.avif' },
    { icon: '../../assets/press/logo3.avif' },
  ];
  selectedTab = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
