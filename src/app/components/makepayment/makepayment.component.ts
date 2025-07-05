import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-makepayment',
  imports: [CommonModule, FormsModule],
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent {
  paymentMode: string = 'card';
  cakeFlavour: string = '';
  paymentSummary: any = null;

  payer = { name: '' };
  card = {
    number: '',
    amount: null,
    type: '',
    expiry: '',
    cvv: '',
    payDateTime: ''
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  proceedCardPayment(form: NgForm) {
    if (this.paymentMode === 'cash') {
      if (!this.payer.name || !this.cakeFlavour || !this.card.amount || !this.card.payDateTime) {
        this.showToast('contactErrorToast');
        return;
      }

      this.paymentSummary = {
        payerName: this.payer.name,
        amount: this.card.amount,
        cakeFlavour: this.cakeFlavour,
        payDateTime: this.card.payDateTime,
        mode: 'Cash on Delivery'
      };
      this.showToast('contactSuccessToast');
      form.resetForm();
      this.paymentMode = 'cash';
      return;
    }

    if (
      !this.payer.name || !this.card.number || !this.card.amount ||
      !this.card.type || !this.card.expiry || !this.card.cvv ||
      !this.card.payDateTime || !this.cakeFlavour
    ) {
      this.showToast('contactErrorToast');
      return;
    }

    this.paymentSummary = {
      payerName: this.payer.name,
      amount: this.card.amount,
      type: this.card.type,
      number: this.card.number,
      payDateTime: this.card.payDateTime,
      cakeFlavour: this.cakeFlavour,
      mode: 'Card Payment'
    };

    this.showToast('contactSuccessToast');
    form.resetForm();
    this.paymentMode = 'card';
  }

  resetCard(form: NgForm) {
    form.resetForm();
    this.paymentSummary = null;
    this.paymentMode = 'card';
  }

  showToast(toastId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const toastEl = document.getElementById(toastId);
      if (toastEl && (window as any).bootstrap?.Toast) {
        const toastInstance = new (window as any).bootstrap.Toast(toastEl);
        toastInstance.show();
      }
    }
  }
}


