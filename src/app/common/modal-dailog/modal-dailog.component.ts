import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-dailog',
  standalone: true,
  imports: [],
  templateUrl: './modal-dailog.component.html',
  styleUrl: './modal-dailog.component.scss'
})
export class ModalDailogComponent {
  @ViewChild('exampleModal', { static: true }) modalElement!: ElementRef;
}
