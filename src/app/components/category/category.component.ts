import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Shared-Api/models/product';
import { ProductService } from '../Shared-Api/service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  product$ : Observable<Product[]>
  firstIndex = 0
  lastIndex = 9

  constructor(private productService : ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('_id')
    this.product$ = this.productService.getProductCategory(id)
 
  }

  arrProduct(length){
    return new Array(Math.ceil(length /9 ))
  }

  paginationIndex(pageIndex) {
    this.firstIndex = pageIndex * 9
    this.lastIndex = this.firstIndex + 9
  }

}
