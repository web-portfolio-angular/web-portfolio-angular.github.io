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
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl (null),
      'email': new FormControl (null, [Validators.required, Validators.email]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'confirmPass': new FormControl (null, [Validators.minLength(8), Validators.maxLength(30)])
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
    const name = signupForm.value.name;
    if(password != confirmPass){
      console.log('different');      
    }
    this.authService.signUp(email, password)
    .subscribe(() => {
      // this.authService.signUpAdditionalData(name).subscribe();
      this.errorMsg = null;
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, error => {
      this.errorMsg = error;
      this.isLoading = false;
    });   
  }
}
