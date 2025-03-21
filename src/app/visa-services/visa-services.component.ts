import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visa-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './visa-services.component.html',
  styleUrl: './visa-services.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisaServicesComponent {

}
