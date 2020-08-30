import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'

import { SignupComponent } from '../signup/signup.component';
import { AuthGuardOut } from '../shared/services/authOut.guard.service';

@NgModule({
  declarations:[
    SignupComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'signup', component: SignupComponent, canActivate: [AuthGuardOut]}
    ])
  ]
})
export class Signup{}