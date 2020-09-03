import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component'

@NgModule({
  declarations:[
    ContactsComponent
  ],
  imports:[
    RouterModule.forChild([
      {path: 'contacts', component: ContactsComponent}
    ])
  ]
})
export class ContactsModule{}