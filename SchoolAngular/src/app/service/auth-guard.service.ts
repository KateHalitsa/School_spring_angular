import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AccessRight, StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private storageService: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let needAccess: AccessRight[] = route.data['access'];
    if (this.storageService.canAccess(needAccess))
      return true;

    //this.router. navigate(['login']);
    return this.router.parseUrl('login');

  }

}
