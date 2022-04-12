import { Injectable } from '@angular/core';
import { AdminComponent } from './admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get(arg0: string) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  

  public login(userInfo: AdminComponent){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}