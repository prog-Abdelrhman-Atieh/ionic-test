import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    // http:HttpClient
    private router:Router,
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Promise<boolean>{
    // console.log(next);
    // console.log(state);
    return new Promise((resolve,reject)=>{
      setTimeout(_=>{
        // console.log(window['isLogedIn'])
        // this.router.setUpLocationChangeListener
        // this.router.
        if(window['isLogedIn'])
          resolve(true)
        else
          this.router.navigateByUrl('login',{skipLocationChange:true,});

      },10);
    });
  }
}
