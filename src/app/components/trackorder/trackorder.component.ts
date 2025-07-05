import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-trackorder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent {
  orderId = '';
  customerName = '';
  cakeFlavour = '';
  orderStatus = '';
  loading = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  trackOrder(form: NgForm) {
    if (form.invalid) {
      this.orderStatus = '';
      this.showToast('trackErrorToast');
      return;
    }

    this.showToast('trackSuccessToast');
    this.orderStatus = 'Fetching order status...';
    this.loading = true;

    setTimeout(() => {
      const statuses = [
        'Order Received',
        'Baking in Progress',
        'Decorating the Cake',
        'Out for Delivery',
        'Delivered'
      ];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      this.orderStatus = `Cake ID: ${this.orderId}, Customer: ${this.customerName}, Cake: ${this.cakeFlavour} → ${randomStatus}`;
      this.loading = false;
    }, 2000);
  }

  resetOrder() {
    this.orderId = '';
    this.customerName = '';
    this.cakeFlavour = '';
    this.orderStatus = '';
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

