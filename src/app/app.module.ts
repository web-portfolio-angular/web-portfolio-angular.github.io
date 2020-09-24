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
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// the cars are loaded on init every time
// db read = true, write = auth?
// preload images
// on relload with save data the button is not active
// loader on every page?
// fix loading spinner
// separated buttons
// index title
// directive for length check
// ul li style
// response after Crud
// comment trimp space

// ng build --prod --base-href "https://web-portfolio-angular.github.io"
// ngh --dir=dist/index

// https://stackoverflow.com/questions/58356396/how-to-save-date-as-timestamp-in-angular-firestore
// firebase.firestore.FieldValue.serverTimestamp()