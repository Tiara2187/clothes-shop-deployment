import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment'
import { Category, Product } from '../models/product';

const BACKEND_URL = environment.apiUrl + '/users'
const URL_PRODUCT = environment.apiUrl + '/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router : Router) { }

  public getProduct() : Observable<Product[]>{
    return this.http.get<Product[]>(URL_PRODUCT + '/listproduct').pipe(map(this.getProductData))
  }

  private getProductData(response){
    return response.product
  }

  getDetailProduct(_id) : Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/product/product-detail/${_id}`).pipe(map(res => {
      return res
    }))
  }

  private categoryData(response){
    return response.data
  }

  public getCategory() : Observable<Category[]> {
    return this.http.get<Product[]>(URL_PRODUCT + '/category').pipe(map(this.categoryData))
  }

  public getProductCategory(_id) : Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/product/product/category/${_id}`).pipe(map(this.getProductData)) 
  }
  
}
