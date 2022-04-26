import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url : string;
  token : string;
  header : any;

  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:60079/api/Login/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  Login(model : any){  
    debugger;  
   return this.http.post<any>(this.Url+'UserLogin',model,{ headers: this.header});  
  }  

   CreateUser(register:Register)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Register[]>(this.Url + 'createcontact', register, httpOptions)  
   }  
} 
