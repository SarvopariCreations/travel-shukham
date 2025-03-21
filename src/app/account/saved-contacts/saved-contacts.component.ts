import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-contacts.component.html',
  styleUrl: './saved-contacts.component.scss'
})
export class SavedContactsComponent {
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
