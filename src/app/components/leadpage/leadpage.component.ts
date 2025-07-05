import { Component } from '@angular/core';
import { WelcomepageComponent } from "../welcomepage/welcomepage.component";
import { OurservicesComponent } from "../ourservices/ourservices.component";
import { BestsellingcategoriesComponent } from "../bestsellingcategories/bestsellingcategories.component";
import { HomepageComponent } from "../homepage/homepage.component";
import { ReviewspageComponent } from "../reviewspage/reviewspage.component";

@Component({
  selector: 'app-leadpage',
  imports: [WelcomepageComponent, OurservicesComponent, BestsellingcategoriesComponent, HomepageComponent, ReviewspageComponent],
  templateUrl: './leadpage.component.html',
  styleUrl: './leadpage.component.scss'
})
export class LeadpageComponent {

}
