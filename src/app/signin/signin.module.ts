import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './signin.component';
import { AuthGuardOut } from '../shared/services/authOut.guard.service';

@NgModule({
  declarations:[
    SigninComponent
  ],
  imports:[
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'signin', component: SigninComponent, canActivate: [AuthGuardOut]}
    ])
  ]
})
export class SigninModule{}