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
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// preload images
// on relload with saved data the button is not active
// comment trimp space
// ... in longer name (comment section)

// temata prezapisva transitiona na drugite elementi pri hover
// loading spinner sass
// sign autofill color

// userAditional info v service

//  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
//  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// mat-typography

// ng build --prod --base-href "https://web-portfolio-angular.github.io"
// ngh --dir=dist/index


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// import { FirestoreService } from '../../shared/services/firestore.service';
// import { UserAdditionalData } from '../models/user-additional-data.model';

// @Injectable({providedIn: 'root'})
// export class AdditionUserInfoService {
//   userAdditionalDataSubject = new BehaviorSubject<any>(null);
//   userAdditionalData: UserAdditionalInfo[];

//   constructor( private firestore: FirestoreService){}

// 	getUserAdditionalData(){    
//     const userData: {
//       name: string,
//       phone: number,
//       email: string,
//       id: string
//     } = JSON.parse(localStorage.getItem('userData'));
//     if (!userData){
//       return
//     }

//     this.firestore.getRegistration(userData.email).subscribe(ressData => {
//       this.userAdditionalData = ressData.map(e => {
//         return {
//           id: e.payload.doc.id,
//           ...e.payload.doc.data() as UserAdditionalInfo
//         }
//       })
//       this.userAdditionalDataSubject.next(this.userAdditionalData);
//     })
//   }
// }
