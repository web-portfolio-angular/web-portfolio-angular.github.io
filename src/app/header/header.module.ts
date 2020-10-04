import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ClickOutsideDirective } from '../shared/directives/click-outside-directive';

@NgModule({
  declarations: [
    HeaderComponent,
    UserInfoComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule{}