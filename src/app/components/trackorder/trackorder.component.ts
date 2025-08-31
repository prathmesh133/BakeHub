import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-trackorder',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.scss']
})
export class TrackorderComponent implements OnInit {
 trackForm!: FormGroup;
  orderStatus: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.trackForm = this.fb.group({
      orderId: ['', Validators.required],
      customerName: ['', Validators.required]
    });
  }

  trackOrder(): void {
    if (this.trackForm.invalid) {
      this.orderStatus = '';
      this.showToast('trackErrorToast');
      this.trackForm.markAllAsTouched();
      return;
    }

    const { orderId, customerName, } = this.trackForm.value;
    console.log('Tracking Data:', this.trackForm.value);

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
      this.orderStatus = `Cake Id: ${orderId}, Customer name: ${customerName}, Order status: → ${randomStatus}`;
      this.loading = false;
    }, 2000);
  }

  resetOrder(): void {
    this.trackForm.reset();
    this.orderStatus = '';
  }

  showToast(toastId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const toastEl = document.getElementById(toastId);
      if (toastEl && (window as any).bootstrap?.Toast) {
        const toastInstance = new (window as any).bootstrap.Toast(toastEl);
        toastInstance.show();
      }
    }
  }
}



