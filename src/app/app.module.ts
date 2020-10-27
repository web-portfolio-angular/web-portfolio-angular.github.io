import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { HeaderModule } from './header/header.module';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ScrollTopComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// preload images
// on relload with saved data the button is not active
// comment trimp space

// temata prezapisva transitiona na drugite elementi pri hover
// loading spinner sass
// sign autofill color
// min width naproducts
// scroll to top symbol

// klient da si zibra kakvo info da se vijda za nego

// <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// mat-typography

// ng build --prod --base-href "https://web-portfolio-angular.github.io"
// ngh --dir=dist/index