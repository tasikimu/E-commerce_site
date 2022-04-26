import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data =  false;
  UserForm: any;
  message: string;

  constructor(private formbuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.UserForm = this.formbuilder.group({
      UserName: ['', [Validators.required]],
      LoginName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    });
  }
  onFormSubmit()
  {
    const user = this.UserForm.value;
    this.CreateUser(user);
  }
  CreateUser(register: Register)
  {
    this.loginService.CreateUser(register).subscribe(
      () =>
      {
        this.data = true;
        this.message = 'Data saved Successfully';
        this.UserForm.reset();
      }
    );
  }

}
