import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Shared-Api/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id : any;
  data :any;
  

  constructor(private route : ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id']
    this.getDetailProduct()
  }
  getDetailProduct(){
    this.productService.getDetailProduct(this.id).subscribe(data => {
      this.data = data.product
      console.log(this.data);
      
    })
  }

}
