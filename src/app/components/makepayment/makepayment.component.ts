import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, ElementRef} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-makepayment',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  paymentMode: string = 'card';
  paymentSummary: any = null;

  @ViewChild('receipt', { static: false }) receiptRef!: ElementRef;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      paymentMode: ['card'],
      payerName: ['', Validators.required],
      cakeFlavour: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      payDateTime: ['', Validators.required],
      number: [''],
      type: [''],
      expiry: [''],
      cvv: ['']
    });

    this.onPaymentModeChange();
  }

  onPaymentModeChange() {
    this.paymentForm.get('paymentMode')?.valueChanges.subscribe(mode => {
      this.paymentMode = mode;
      const cardControls = ['number', 'type', 'expiry', 'cvv'];

      cardControls.forEach(control => {
        const formControl = this.paymentForm.get(control);
        if (mode === 'card') {
          formControl?.setValidators(Validators.required);
        } else {
          formControl?.clearValidators();
          formControl?.reset();
        }
        formControl?.updateValueAndValidity();
      });
    });
  }

  proceedCardPayment() {
    if (this.paymentForm.invalid) {
      this.showToast('contactErrorToast');
      return;
    }

    const data = this.paymentForm.value;
    this.paymentSummary = {
      payerName: data.payerName,
      cakeFlavour: data.cakeFlavour,
      amount: data.amount,
      payDateTime: data.payDateTime,
      mode: data.paymentMode === 'card' ? 'Card Payment' : 'Cash on Delivery',
      ...(data.paymentMode === 'card' && {
        type: data.type,
        number: data.number
      })
    };

    this.showToast('contactSuccessToast');
    this.paymentForm.reset({ paymentMode: 'card' });
    this.paymentMode = 'card';
  }

  resetCard() {
    this.paymentForm.reset({ paymentMode: 'card' });
    this.paymentSummary = null;
    this.paymentMode = 'card';
  }

  generateReceipt() {
    if (!this.paymentSummary || !this.receiptRef) {
      this.showToast('contactErrorToast');
      return;
    }

    html2canvas(this.receiptRef.nativeElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('payment-receipt.pdf');
      this.showToast('receiptGeneratedToast');
    }).catch(() => {
      this.showToast('contactErrorToast');
    });
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
