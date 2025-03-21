import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappButtonComponent } from '../common/whatsapp-button/whatsapp-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.scss',  
})
export class TermsConditionComponent {
}