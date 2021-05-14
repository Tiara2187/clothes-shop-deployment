import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ListCart } from '../../Shared-Api/models/cart';
import { CartService } from '../../Shared-Api/service/cart.service';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product$: Observable<ListCart[]>;
  totalprice = 0;
  totalquantity = 0;
  productprice : number;

  constructor(private userService : UserService, private cartService : CartService, private route : Router) { }
  id;

  ngOnInit(): void {
    this.cartService.getCart().subscribe((item) => {
      for (let i = 0; i < item.length; i++) {
        this.totalprice += item[i].quantity * item[i].product.productprice;
      }
    });
    this.product$ = this.cartService.getCart()

    this.cartService.getCart().subscribe((item) => {
      for (let i = 0; i < item.length; i++) {
        this.totalquantity += item[i].quantity;
      }
    });
    this.product$ = this.cartService.getCart()
  }

  deleteQuantityCart(product){
    this.cartService.deleteQuantityCart(product);
  }

  addQuantityCart(product){
    this.cartService.addQuantityCart(product);
  }

  deleteCart(id) {
    Swal.fire({ title: 'Are you sure?', text: 'Your product will delete!', icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteCart(id).subscribe((res) => {});
        Swal.fire(
          'Deleted!',
          'Your wishlist has been deleted.',
          'success'
        ).then((result) => {
          location.reload();
        });
      }
    });
  }

  checkout(item) {
    this.userService.getAddress().subscribe((res) => {
      if(res.data == null){
        Swal.fire('Sorry', 'Please Complete Your Address Data User', 'error');
        this.route.navigate(['user/profile-detail']);
      } else if (
        res.data.country &&
        res.data.province &&
        res.data.city &&
        res.data.district &&
        res.data.village &&
        res.data.zip 
      ) {
        this.cartService.checkout(item).subscribe(
          (res) => {
            this.route.navigate(['user/order-list'])
            Swal.fire('Thanks!', 'Checkout Success', 'success').then((res) =>
            location.reload()
            );
          },
          (err) => {
            Swal.fire('Sorry', err.error.message, 'error');
          }
        );
      }
      else {
        Swal.fire('Sorry', 'Please Complete Your Address Data', 'error');
        this.route.navigate(['user/profile-detail']);
      }
    });
  }
}