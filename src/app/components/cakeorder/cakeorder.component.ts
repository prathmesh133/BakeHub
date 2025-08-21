import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cakeorder',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cakeorder.component.html',
  styleUrls: ['./cakeorder.component.scss']
})
export class CakeorderComponent implements OnInit {
  orderForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      orderId: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      cakeFlavour: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      message: ['']
    });
  }

  submitOrder(): void {
    if (this.orderForm.valid) {
      this.submitted = true;
      console.log('Cake Order Form Data:', this.orderForm.value);
      this.showToast('successToast', 'Order placed successfully!');
    } else {
      this.submitted = false;
      this.showToast('errorToast', 'Please fill all fields correctly!');
    }
  }

  resetOrder(): void {
    this.orderForm.reset({ quantity: 1 });
    this.submitted = false;
  }

  downloadReceipt(): void {
    const receipt = document.getElementById('receipt');
    if (!receipt) return;

    html2canvas(receipt).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Cake_Order_Receipt.pdf');
    });
  }

  printReceipt(): void {
    const receipt = document.getElementById('receipt');
    if (!receipt) return;

    const printContents = receipt.innerHTML;
    const newWin = window.open('', '_blank', 'width=800,height=600');
    if (newWin) {
      newWin.document.write(`
        <html>
          <head>
            <title>Cake Order Receipt</title>
            <style>
              body { font-family: Arial, sans-serif; padding:20px; }
              h3 { text-align:center; }
            </style>
          </head>
          <body>
            ${printContents}
            <script>
              window.onload = function() { window.print(); }
            </script>
          </body>
        </html>
      `);
      newWin.document.close();
    }
  }

  showToast(toastId: string, message: string): void {
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
