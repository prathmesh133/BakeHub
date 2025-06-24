import { Component } from '@angular/core';
import { OrderingstepsComponent } from "../orderingsteps/orderingsteps.component";
import { CakeorderComponent } from "../cakeorder/cakeorder.component";

@Component({
  selector: 'app-orderingprocess',
  imports: [OrderingstepsComponent, CakeorderComponent],
  templateUrl: './orderingprocess.component.html',
  styleUrl: './orderingprocess.component.scss'
})
export class OrderingprocessComponent {

}
