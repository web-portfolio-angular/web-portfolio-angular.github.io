import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule{}