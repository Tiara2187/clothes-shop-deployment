import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService : UserService, private router : Router) {}

    canActivate(
        next : ActivatedRouteSnapshot,
        state : RouterStateSnapshot
    ) : Observable <boolean> |Promise<boolean> |boolean{
        if(this.userService.isLogin !== true ) {
            this.router.navigate([''])
            Swal.fire('Sorry','You cant access, please Login First','error')
        }
        return true
    }

}
