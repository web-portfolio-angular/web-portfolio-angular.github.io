import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

import { SignupComponent } from '../signup/signup.component';
import { AuthGuardOut } from '../shared/services/authOut.guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations:[
    SignupComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    RouterModule.forChild([
      {path: '', component: SignupComponent, canActivate: [AuthGuardOut]}
    ])
  ]
})
export class SignupModule{}