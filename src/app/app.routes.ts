import { Routes } from '@angular/router';
import { LeadpageComponent } from './shared/leadpage/leadpage.component';
import { MakepaymentComponent } from './shared/makepayment/makepayment.component';
import { TrackorderComponent } from './shared/trackorder/trackorder.component';
import { OrderingprocessComponent } from './shared/orderingprocess/orderingprocess.component';
import { GetintouchComponent } from './shared/getintouch/getintouch.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { TermsandconditionsComponent } from './shared/termsandconditions/termsandconditions.component';
import { ShippinganddeliveryComponent } from './shared/shippinganddelivery/shippinganddelivery.component';
import { PrivacypolicyComponent } from './shared/privacypolicy/privacypolicy.component';
import { ReturnandrefundsComponent } from './shared/returnandrefunds/returnandrefunds.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LeadpageComponent },
  { path: 'ordercake', component: OrderingprocessComponent },
  { path: 'trackorder', component: TrackorderComponent },
  { path: 'makepayment', component: MakepaymentComponent },
  { path: 'contact', component: GetintouchComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'shippinganddelivery', component: ShippinganddeliveryComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'returnandrefund', component: ReturnandrefundsComponent }

];
