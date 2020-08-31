import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg = null;
  isRegistered = false;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl (null, [Validators.required]),
      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'confirmPass': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    })
  }

  onSubmit(signupForm){
    this.isLoading = true;
    if (!signupForm.valid){
      return;
    }
    const email = signupForm.value.email;
    const password =  signupForm.value.password;
    const confirmPass = signupForm.value.confirmPass;
    if(password != confirmPass){
      console.log('different');      
    }
    this.authService.signUp(email, password).subscribe(() => {
      this.errorMsg = null;
      this.isRegistered = true;      
      this.signupForm.reset();
      this.isLoading = false;

      // this.authService.signUpAdditionalData(signupForm.value.name, signupForm.value.email).subscribe(()=>{
      //   console.log('success');      
      // }, error => {
      //   console.log('ERROR: ' + error); 
      // })

    }, error => {
      this.errorMsg = error;
      this.isLoading = false;
    });   
  }
}
