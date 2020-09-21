import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { FirestoreService} from '../shared/services/firestore.service';
import { UserAdditionalInfo } from '../shared/models/user-additional-info.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg = null;
  isLoading = false;

  constructor(
    private authService: AuthService, 
    private firestore: FirestoreService, 
    private router: Router, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      phone: new FormControl (null, Validators.required),
      email: new FormControl (null, [Validators.required, Validators.email]),
      password: new FormControl (null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      confirmPass: new FormControl (null, [Validators.required])
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

  // numeric() {
  //   const phone = this.signupForm.value.phone;
  //   if (phone.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
  //     console.log('1');      
  //    return { invalidNumber: true };
  //   } else {
  //     console.log('1');
  //     return null;
  //   }
  // }

  onSubmit(signupForm){
    this.isLoading = true;
    if (!signupForm.valid){
      this.isLoading = false;
      return;      
    }

    const name = signupForm.value.name;
    const phone = signupForm.value.phone;
    const email = signupForm.value.email;
    const password =  signupForm.value.password;
    const user: UserAdditionalInfo = {name, phone, email};
    this.authService.signUp(email, password)
    .subscribe(() => {
      this.firestore.createRegistration(user)
      this.errorMsg = null;
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, error => {
      this.errorMsg = error;
      this.isLoading = false;
    });   
  }
}