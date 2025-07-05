import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-getintouch',
  imports: [ContactComponent, FaqComponent],
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.scss'
})
export class GetintouchComponent {

}
