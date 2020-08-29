import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { SigninComponent } from './signin.component';

@NgModule({
  declarations:[
    SigninComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'signin', component: SigninComponent}
    ])
  ]
})
export class Signin{

}