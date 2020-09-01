import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuardIn } from './shared/services/authIn.guard.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { ContactsModule } from './contacts/contacts.module';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuardIn]},
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuardIn]},
  {path: 'services', component: ServicesComponent, canActivate: [AuthGuardIn]},  
  {path: '**', redirectTo: '/signin'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SigninModule,
    SignupModule,
    ContactsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
