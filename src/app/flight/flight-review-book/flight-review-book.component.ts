import { Component, CUSTOM_ELEMENTS_SCHEMA, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { FareRulesModelComponent } from '../fare-rules-model/fare-rules-model.component';
import { AddBaggageModelComponent } from '../add-baggage-model/add-baggage-model.component';
import { ViewBenefitsModalComponent } from '../view-benefits-modal/view-benefits-modal.component';
import { ViewPolicyModalComponent } from '../view-policy-modal/view-policy-modal.component';

@Component({
  selector: 'app-flight-review-book',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FareRulesModelComponent, AddBaggageModelComponent, ViewBenefitsModalComponent, ViewPolicyModalComponent],
  templateUrl: './flight-review-book.component.html',
  styleUrl: './flight-review-book.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FlightReviewBookComponent {

  constructor(private renderer: Renderer2) {}

  isFareModelOpen: boolean = false;
  isBaggegeOpen: boolean = false;
  isViewBenefitOpen: boolean = false;
  isViewPolicyOpen: boolean = false;

  openFareModal() {
    this.isFareModelOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeFareModal() {
    this.isFareModelOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  openBeggegeModal() {
    this.isBaggegeOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeBaggegeModal() {
    this.isBaggegeOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  openViewBModal() {
    this.isViewBenefitOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeViewBModal() {
    this.isViewBenefitOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  openViewPolicyModal() {
    this.isViewPolicyOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeViewPolicyModal() {
    this.isViewPolicyOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
}
