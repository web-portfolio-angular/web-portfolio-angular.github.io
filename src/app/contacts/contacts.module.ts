import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';



@NgModule({
  declarations:[
    ContactsComponent
  ],
  imports:[
    CommonModule,

    RouterModule.forChild([
      {path: '', component: ContactsComponent}
    ])
  ]
})
export class ContactsModule{}