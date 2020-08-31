import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMsg = null;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl (null, [Validators.required, Validators.email, Validators.maxLength(30)]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    });
  }

  onSubmit(signinForm){
    this.isLoading = true;
    const email = signinForm.value.email;
    const password =  signinForm.value.password;
    this.authService.signIn(email, password).subscribe(() => {      
      this.errorMsg = null;
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, error => {      
      this.errorMsg = error; 
      this.isLoading = false; 
    });
  }
}
