import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Cart, Checkout, ListCart, OrderList } from '../models/cart';

const BACKEND_URL = environment.apiUrl + '/users'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient, private router : Router) { }

  addCart = (cart : Cart) => {
    return this.http.post<any>(BACKEND_URL + '/addcart', cart).subscribe((res : any) => {
      console.log(res.data);
      Swal.fire({icon: 'success', title: 'Add Product Success'}).then(result => {window.location.reload()})

    },
    error => {
      Swal.fire('Sorry', error.error.message,'error')
    });
  }

  public getCart() : Observable<ListCart[]>{
    return this.http.get<any>(BACKEND_URL + '/listcart').pipe(map(this.getCartData))
  }

  private getCartData(response) {
    return response.data
  }

  public deleteQuantityCart(_id){
    return this.http.delete<any>(`${environment.apiUrl}/users/deleteonecart/${_id}`).subscribe(res => {
      Swal.fire('Success','Success delete product', 'success').then(res => location.reload())

    })
  }

  public addQuantityCart(_id) {
    return this.http.get<any>(`${environment.apiUrl}/users/addonecart/${_id}`).subscribe(res => {
      Swal.fire({icon: 'success', title: 'Success add product'}).then(res => location.reload ())
    })
  }

  public deleteCart(_id) {
    return this.http.delete(`${environment.apiUrl}/users/deletecart/${_id}`)
  }

  public checkout(checkout : Checkout) {
    return this.http.post(BACKEND_URL + '/checkout', checkout)
  }

  public orderListHistory() : Observable<OrderList>{
    return this.http.get(BACKEND_URL + '/listcheckout').pipe(map(this.getCartData))
  }

  handleError(error:HttpErrorResponse){
    let message = '';

    if(error.error instanceof ErrorEvent){
        message = error.error.message

    }else{
        message = `Error code: ${error.status} \n Message Error: ${error.message}`;
    }
    return throwError(message);

  }
    
}
