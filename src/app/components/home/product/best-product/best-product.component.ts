import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/Shared-Api/models/product';
import { ProductService } from 'src/app/components/Shared-Api/service/product.service';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.css']
})
export class BestProductComponent implements OnInit {

  product$ : Observable<Product[]>

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct()
    console.log(this.product$);
  }


}
