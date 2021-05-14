import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})

//get token di header
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService : UserService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.getToken()
         req = req.clone({
            setHeaders:{
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(req)
    }
}
