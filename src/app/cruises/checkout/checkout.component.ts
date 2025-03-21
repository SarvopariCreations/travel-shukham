import { Component } from '@angular/core';
import { PaymentItegrationComponent } from '../../common/payment-itegration/payment-itegration.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [PaymentItegrationComponent, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
