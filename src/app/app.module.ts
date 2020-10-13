import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// the cars are loaded on init every time
// preload images
// on relload with saved data the button is not active
// comment trimp space
// ... in longer name (comment section)
// phone code wiht countries

// da opravq clasovete za sass neistvane __ --
// temata prezapisva transitiona na drugite elementi pri hover
// loading spinner sass
// da opravq theme switcha i servica
// textarea place holder color
// change color names
// sign autofill color
// povtarqne na kod

//  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
//  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// mat-typography

// ng build --prod --base-href "https://web-portfolio-angular.github.io"
// ngh --dir=dist/index