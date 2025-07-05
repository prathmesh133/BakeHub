import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phoneno: '',
    subject: '',
    message: ''
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  showToast(toastId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const toastEl = document.getElementById(toastId);
      if (toastEl && (window as any).bootstrap?.Toast) {
        const toastInstance = new (window as any).bootstrap.Toast(toastEl);
        toastInstance.show();
      }
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', this.contact);
      this.showToast('contactSuccessToast');
      form.resetForm();
    } else {
      this.showToast('contactErrorToast');
    }
  }
}
