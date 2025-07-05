import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  emailForm = new FormGroup({
    email: new FormControl('')
  });

  onSubmit() {
    const emailValue = this.emailForm.value.email;
    console.log('Submitted Email:', emailValue);
  }

  resetForm() {
    this.emailForm.reset();
  }
}


