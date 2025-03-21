import { Component, EventEmitter, Output, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-request-callback',
  standalone: true,
  imports: [],
  templateUrl: './request-callback.component.html',
  styleUrls: ['./request-callback.component.scss']
})
export class RequestCallbackComponent {
  @Input() title: string = '';
  @Output() save: EventEmitter<void> = new EventEmitter();

  private modalElement: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Check if the platform is browser before accessing `document`
    if (isPlatformBrowser(this.platformId)) {
      const modalElement = document.getElementById('commonModal');
      if (modalElement) {
        this.modalElement = new bootstrap.Modal(modalElement);
      } else {
        console.error('Modal element not found!');
      }
    }
  }

  open(): void {
    if (this.modalElement) {
      this.modalElement.show();
    }
  }

  close(): void {
    if (this.modalElement) {
      this.modalElement.hide();
    }
  }

  onSave(): void {
    this.save.emit();
    this.close();
  }
}
