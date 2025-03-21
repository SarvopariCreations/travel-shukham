import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FaqComponent {

}
