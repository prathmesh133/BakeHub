import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderpageComponent } from './shared/headerpage/headerpage.component';
import { FooterComponent } from "./shared/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderpageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OnlineCakeOrderingSystem';
}
