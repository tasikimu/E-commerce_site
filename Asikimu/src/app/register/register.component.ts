import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;

  form : FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder,) { }

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
    this.form = this.formBuilder.group({
      UserName: ['', Validators.required],
      Fullname: ['', Validators.required],
      Address: ['', Validators.required],
      Email: ['', Validators.required, Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.reset();
  }

  // convenience getter for easy access to form fields
  get f(){
    return this.form.controls;
  }

}
