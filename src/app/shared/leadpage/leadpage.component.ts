import { Component } from '@angular/core';
import { BestsellingcategoriesComponent } from "../bestsellingcategories/bestsellingcategories.component";
import { OurservicesComponent } from "../ourservices/ourservices.component";
import { WelcomepageComponent } from "../welcomepage/welcomepage.component";
import { HomepageComponent } from "../homepage/homepage.component";
import { ReviewspageComponent } from "../reviewspage/reviewspage.component";


@Component({
  selector: 'app-leadpage',
  imports: [BestsellingcategoriesComponent, OurservicesComponent, WelcomepageComponent, HomepageComponent, ReviewspageComponent],
  templateUrl: './leadpage.component.html',
  styleUrl: './leadpage.component.scss'
})
export class LeadpageComponent {

}
