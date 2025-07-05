import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cakeorder',
  imports: [CommonModule, FormsModule],
  templateUrl: './cakeorder.component.html',
  styleUrls: ['./cakeorder.component.scss']
})
export class CakeorderComponent {
  submitted = false;

  order = {
    orderId: '',
    name: '',
    email: '',
    contactNo: '',
    address: '',
    date: '',
    time: '',
    cakeFlavour: '',
    quantity: 1,
    message: ''
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  submitOrder(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      this.showToast('successToast', 'Order placed successfully!');
    } else {
      this.submitted = false;
      this.showToast('errorToast', 'Please fill all fields correctly!');
    }
  }

  resetOrder() {
    this.order = {
      orderId: '',
      name: '',
      email: '',
      contactNo: '',
      address: '',
      date: '',
      time: '',
      cakeFlavour: '',
      quantity: 1,
      message: ''
    };
    this.submitted = false;
  }

  downloadReceipt() {
    const summary = document.querySelector('.order-summary') as HTMLElement;
    if (!summary) return;

    html2canvas(summary).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Cake_Order_Receipt.pdf');

      this.showToast('successToast', 'Receipt generated successfully!');
    });
  }

  showToast(toastId: string, message: string) {
    if (isPlatformBrowser(this.platformId)) {
      const toastEl = document.getElementById(toastId);
      if (toastEl) {
        const msgEl = toastEl.querySelector('.toast-message');
        if (msgEl) {
          msgEl.textContent = message;
        }

        if ((window as any).bootstrap?.Toast) {
          const toast = new (window as any).bootstrap.Toast(toastEl);
          toast.show();
        }
      }
    }
  }
}
