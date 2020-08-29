import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMsg = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl (null, [Validators.required ,Validators.email]),
      'password': new FormControl (null, Validators.required)
    });
  }

  onSubmit(signinForm: NgForm){
    const email = signinForm.value.email;
    const password =  signinForm.value.password;
    this.authService.signIn(email, password).subscribe(() => {
      this.errorMsg = null;
    }, error => {
      this.errorMsg = error;  
    });
  }
}
