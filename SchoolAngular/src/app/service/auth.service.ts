import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {StorageService, AccessRight} from "./storage.service";

@Injectable()
export class AuthenticationService {

  private basUrl = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient, private storageService: StorageService) {

  }

  login(username: string, password: string): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}` + '/signin', {username, password});
  }

  /*
  createStudent(user: Student): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, user);
  }
  * */

  isUserLoggedIn() {

    /*let user = sessionStorage.getItem('username')
    console.log(!(user === null)) */

    return this.storageService.isLoggedIn();
  }

  getUserName(): string
  {
    let user = this.storageService.getUser();
    if(user != null)
    {
      return user.username;
    }
    else {
      return '';
    }
  }

  getUserEmail(): string
  {
    let user = this.storageService.getUser();
    if(user != null)
    {
      return user.email;
    }
    else {
      return '';
    }
  }

  logOut() {
    //sessionStorage.removeItem('username')
    this.storageService.clean()
  }

  accessRights(): AccessRight[]
  {
    return this.storageService.accessRights();
  }
  canAccess(needAccess: AccessRight[]): boolean{
    return this.storageService.canAccess(needAccess)
  }
}
