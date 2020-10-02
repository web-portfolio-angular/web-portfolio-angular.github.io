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
// preload images
// on relload with save data the button is not active
// comment trimp space
// ... in longer name

// ng build --prod --base-href "https://web-portfolio-angular.github.io"
// ngh --dir=dist/index


// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appAnimation]'
// })

// export class appAnimationDirective {
// 	menuState = 'out';
// 	disableButton = true;
	
// 	constructor() { }

// 	@HostBinding('class.hamburger-active') hamburgerActive = false;
	
// 	@HostListener('click') onClick(){
// 		this.menuState == 'in' ? [this.menuState = 'out', this.hamburgerActive = false]  : [this.menuState = 'in', this.hamburgerActive = true];			
// 	}
// }