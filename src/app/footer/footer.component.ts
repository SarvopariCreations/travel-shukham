import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WhatsappButtonComponent } from '../common/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, WhatsappButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
