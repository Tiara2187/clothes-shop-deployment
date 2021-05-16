import { Injectable } from '@angular/core'
import { environment } from '../../../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { addressUser, ForgetPass, UpdateUser, User } from '../models/user'
import Swal from 'sweetalert2'
const BACKEND_URL = environment.apiUrl + '/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user : User) {
    return this.http.post(BACKEND_URL +'/signup', user).subscribe((res: any) => {
      
      Swal.fire('Welcome','You can login now','success')
      this.router.navigate(['']);
    },
    error => {
      Swal.fire('Sorry',error.error.message,'error')
    })
  }

  get isLogin() {
    let token = localStorage.getItem('token');
    if(token != null) {
      return true
    }
    else return false
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser(): Observable<any> {
    return this.http.get<any>(BACKEND_URL, {
        headers: this.headers,}).pipe(map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  getAddress(): Observable<any>{
    return this.http.get<any>(BACKEND_URL + '/address');
  }

  signIn(user : User){
    return this.http.post<any>(BACKEND_URL + '/signin', user).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.getUser().subscribe((res: any) => {
       Swal.fire({icon: 'success', title: 'Login Success'}).then(result => { location.reload() })
      this.router.navigate(['']);
      })
    },
    error => {
      Swal.fire('Oops...', error.error.message,'error')
    });
    
  }

  forgetPass(user : ForgetPass) : Observable<any>{
    return this.http.put<any>(BACKEND_URL + '/forgetpass', user).pipe(map(result =>  true))
  }

  createAddress(address : addressUser){
    return this.http.post<any>(BACKEND_URL + '/address', address).subscribe((res: any) => {
      Swal.fire({icon: 'success', title: 'Success Update Address'})
      this.router.navigate(['user/profile-detail'])
    },
    error => {
      Swal.fire('Sorry', error.error.message,'error')
    })
  }

  updateUser(user : UpdateUser) : Observable<any> {
    return this.http.put<any>(BACKEND_URL + '/updateuser', user).pipe(map(result => true))
  }

  logout() {
    let clearToken = localStorage.removeItem('token')
    if (clearToken == null){
      this.router.navigate([''])
      Swal.fire('Success','Logout Success','info').then(result => {location})
    }
  }

  handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) message = error.error.message;
    else message = `Error code : ${error.status} \n Message Error : ${error.message}`
    return throwError(message);
  }
}
