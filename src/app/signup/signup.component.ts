import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
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

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      confirmPass: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    },{
      validator: this.mustMatch('password', 'confirmPass')
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
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
