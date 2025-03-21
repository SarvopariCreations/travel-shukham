import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-your-vacations',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './your-vacations.component.html',
  styleUrl: './your-vacations.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class YourVacationsComponent {

}
