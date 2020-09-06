import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { CarStorateService } from './products/cars/car-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, CarStorateService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// the cars are loaded on init every time
// preload images
// on relload with save data the button is not active
// loader on every page?

// ng build --prod --base-href "https://web-portfolio-angular.github.io"
// ngh --dir=dist/index