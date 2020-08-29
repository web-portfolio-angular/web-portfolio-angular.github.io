import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorsComponent } from './motors/motors.component';
import { WowComponent } from './wow/wow.component';
import { FitnessComponent } from './fitness/fitness.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorsComponent,
    WowComponent,
    FitnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
