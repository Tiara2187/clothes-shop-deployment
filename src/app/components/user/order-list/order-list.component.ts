import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Shared-Api/service/cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  data$ : any
  constructor( private carService : CartService) { }

  ngOnInit(): void {
    this.data$ = this.carService.orderListHistory()
  }

}
