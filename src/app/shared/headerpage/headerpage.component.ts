import { Component } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
@Component({
  selector: 'app-headerpage',
  imports: [RouterModule],
  templateUrl: './headerpage.component.html',
  styleUrl: './headerpage.component.scss'
})
export class HeaderpageComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);  
  }
}
