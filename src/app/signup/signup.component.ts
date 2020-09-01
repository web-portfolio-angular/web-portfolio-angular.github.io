import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg = null;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'confirmPass': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    })    
  }
  // this.passwordCheck.bind(this)
  passwordCheck(control: FormControl){
    const password =  this.signupForm.get('password').value;
    const confirmPass = control.value;
    return password === confirmPass ? null : { notEqual: true}
  }

  onSubmit(signupForm){
    this.isLoading = true;
    if (!signupForm.valid){
      this.isLoading = false;
      this.isLoading = false;
      return;      
    }
    const name = signupForm.value.name;
    const email = signupForm.value.email;
    const password =  signupForm.value.password;
    this.authService.signUp(email, password)
    .subscribe(() => {
      this.authService.signUpAdditionalData(name, email).subscribe();
      this.errorMsg = null;
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, error => {
      this.errorMsg = error;
      this.isLoading = false;
    });   
  }
}
