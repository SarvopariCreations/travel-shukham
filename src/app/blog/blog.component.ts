import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogComponent {

}
