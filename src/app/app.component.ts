import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from "./shared/header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, RouterModule, FooterComponent, CommonModule],
})
export class AppComponent {
  showLayout = false;

  visibleRoutes = [
    '/home',
    '/ordercake',
    '/trackorder',
    '/makepayment',
    '/contact',
    '/about',
    '/termsandconditions',
    '/shippinganddelivery',
    '/privacypolicy',
    '/returnandrefund'
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects;
        this.showLayout = this.visibleRoutes.some(route =>
          currentUrl.startsWith(route)
        );
      });
  }
}
