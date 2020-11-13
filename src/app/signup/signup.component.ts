import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { FirestoreService} from '../shared/services/firestore.service';
import { UserAdditionalInfo } from '../shared/models/user.model';
import { PhoneCodes } from '../shared/models/phone-codes.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsgOnSubmit: string = null;
  isLoading: boolean = false;
  phoneCodes: PhoneCodes[];
  errorMsgOnloadPhoneCodes: string = null;
  defaultUserImg: string = 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/userImages%2Fdefault-user.jpg?alt=media&token=7487f1ec-16b1-4814-9943-cb30c8ce1eab';  

  constructor(
    private authService: AuthService, 
    private firestore: FirestoreService, 
    private router: Router, 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.firestore.getPhoneCodes().subscribe(data => {
      this.phoneCodes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as PhoneCodes
        }        
      })
      this.errorMsgOnloadPhoneCodes = null;
    }, error => {
      this.errorMsgOnloadPhoneCodes = error.message;
    });

    this.signupForm = this.formBuilder.group({
      name: new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      phoneCode: new FormControl (359, Validators.required),
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

  onSubmit(signupForm){
    this.isLoading = true;
    if (!signupForm.valid){
      this.isLoading = false;
      return;      
    }

    const name = signupForm.value.name;
    const phoneCode = signupForm.value.phoneCode;
    const phone = signupForm.value.phone;
    const email = signupForm.value.email;
    const password =  signupForm.value.password;
    const userImg = this.defaultUserImg;
    const user: UserAdditionalInfo = {name, phoneCode, phone, email, userImg};    
    this.authService.signUp(email, password)
    .subscribe(() => {
      this.firestore.createRegistration(user);
      this.errorMsgOnSubmit = null;
      this.router.navigate(['/home']);
      this.isLoading = false;
    }, error => {
      this.errorMsgOnSubmit = error;
      this.isLoading = false;
    });   
  }
}