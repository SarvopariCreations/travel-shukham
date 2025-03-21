import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  openWhatsApp() {
    const phoneNumber = '7574841700'; // Replace with your number
    const message = encodeURIComponent('Hello, I need some help!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
}
