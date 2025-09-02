import { Routes } from '@angular/router';
import { LeadpageComponent } from './components/leadpage/leadpage.component';
import { MakepaymentComponent } from './components/makepayment/makepayment.component';
import { TrackorderComponent } from './components/trackorder/trackorder.component';
import { OrderingprocessComponent } from './components/orderingprocess/orderingprocess.component';
import { GetintouchComponent } from './components/getintouch/getintouch.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { ShippinganddeliveryComponent } from './components/shippinganddelivery/shippinganddelivery.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { ReturnandrefundsComponent } from './components/returnandrefunds/returnandrefunds.component';


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
