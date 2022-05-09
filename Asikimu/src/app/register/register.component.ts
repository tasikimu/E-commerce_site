import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;

  form = new FormGroup({
      UserName: new FormControl('', Validators.required),
      Fullname:new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Address: new FormControl('', Validators.required),
    });

  constructor(private userService: UserService) { }

  onFormSubmit(): void 
  {
    this.submitted = true;
    this.userService.registerUser(this.form.value).subscribe((data: any) => {
      debugger;
      if (data.Success == true) this.form.reset();
    });
    console.log(this.form.value)
  }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.reset();
  }

  get f(){
    return this.form.controls;
  }

}
