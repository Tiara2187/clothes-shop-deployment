import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../Shared-Api/models/cart';
import { Product } from '../../Shared-Api/models/product';
import { CartService } from '../../Shared-Api/service/cart.service';
import { ProductService } from '../../Shared-Api/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product$ : Observable<Product[]>
  firstIndex = 0
  lastIndex = 9
  product : any
  cart : Cart

  constructor(private productService : ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct()
  }
  addCart(product) {
    this.cartService.addCart({
      product,
      quantity: 1
    })
  }

  arrProduct(length){
    return new Array(Math.ceil(length / 9))
  }

  paginationIndex(pageIndex) {
    this.firstIndex = pageIndex * 9
    this.lastIndex = this.firstIndex + 9
  }

}
