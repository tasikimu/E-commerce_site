import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUser(user : Users){
    return this.http.post(`${this.rootUrl}/api/User/Register` , user);
  }
}
