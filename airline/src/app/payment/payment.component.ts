import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentSuccess: boolean = false;

  paynow() {
    alert('payment successfull!!!')
    this.paymentSuccess = true;
  }

  payWithGPay() {
    // Add GPay payment logic here
    alert('Payment with GPay');
  }

  payWithPhonePe() {
    // Add PhonePe payment logic here
    alert('Payment with PhonePe');
  }
}
