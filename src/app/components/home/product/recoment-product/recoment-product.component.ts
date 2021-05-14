import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/Shared-Api/models/product';
import { ProductService } from 'src/app/components/Shared-Api/service/product.service';

@Component({
  selector: 'app-recoment-product',
  templateUrl: './recoment-product.component.html',
  styleUrls: ['./recoment-product.component.css']
})
export class RecomentProductComponent implements OnInit {

  product$ : Observable<Product[]>

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProduct()
    console.log(this.product$);
  }

}
