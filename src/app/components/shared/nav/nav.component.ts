import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../Shared-Api/models/product';
import { CartService } from '../../Shared-Api/service/cart.service';
import { ProductService } from '../../Shared-Api/service/product.service';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public totalCart :number;
  cart$ : any
  category$ : Observable<Category[]>
  id : any

  constructor(public userService : UserService, public productService : ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    this.category$ = this.productService.getCategory()
  if(this.userService.isLogin){
    this.cartService.getCart().subscribe(res =>{
      this.totalCart = res.length
    })
    }
  }
  
  logout() {
    this.userService.logout()
  }

  reload(){
    location.reload()
  }

}
