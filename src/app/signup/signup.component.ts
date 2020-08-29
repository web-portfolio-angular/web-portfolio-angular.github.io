import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl (null, [Validators.required, Validators.email, Validators.maxLength(30)]),
      'password': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      'confirmPass': new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)])
    })
  }

  onSubmit(signupForm: NgForm){
    if (!signupForm.valid){
      return;
    }
    const email = signupForm.value.email;
    const password =  signupForm.value.password;
    const confirmPass = signupForm.value.confirmPass;
    if(password != confirmPass){
      console.log('razli4ni');      
    }
    this.authService.signUp(email, password).subscribe(() => {
      this.errorMsg = null;
    }, error => {
      this.errorMsg = error;    
    });
  }
}
