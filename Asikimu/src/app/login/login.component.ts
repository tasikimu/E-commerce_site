import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // model : any={}; 

    
  // errorMessage:string;    
  constructor() { }    
    
    
  ngOnInit() {    
    localStorage.getItem('UserName');
    // localStorage.removeItem('UserName');    
    // localStorage.clear();    
  }

  // login(){    
  //   debugger;    
  //   this.LoginService.Login(this.model).subscribe(    
  //     data => {    
  //       debugger;    
  //       if(data.Status=="Success")    
  //       {       
  //         this.router.navigate(['./Appcomponent']);  
  //         sessionStorage.getItem('UserName');  
  //         debugger;    
  //       }    
  //       else{    
  //         this.errorMessage = data.Message;    
  //       }    
  //     },    
  //     error => {    
  //       this.errorMessage = error.message;    
  //     });    
  // };    
 }    