import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

export enum AccessRight
{
  Guest,
  Student,
  Teacher,
  Admin
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
  public accessRights(): AccessRight[] {
    let result: AccessRight[] = [AccessRight.Guest];

    let user = this.getUser();
    if (user != null) {
      let roles: string[] = user.roles;
      for (let i = 0; i < roles.length; i++) {
        let role = roles[i];
        if (role == 'admin')
          result.push(AccessRight.Admin);
        else if (role == 'teacher')
          result.push(AccessRight.Teacher);
        else if (role == 'student')
          result.push(AccessRight.Student);
      }
    }
    return result;
  }

  public canAccess(needAccess: AccessRight[]): boolean
  {
    let accessArray: AccessRight[] = this.accessRights();

    for(let i=0; i < accessArray.length; i++){
      let val = accessArray[i];
      if (needAccess.includes(val))
        return true;
    }

    return false;
  }
}
