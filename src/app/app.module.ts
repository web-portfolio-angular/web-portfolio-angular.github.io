import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardIn } from './shared/services/authIn.guard.service';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { Signin } from './signin/signin.module';
import { Signup } from './signup/signup.module';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuardIn]},
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuardIn]},
  {path: 'services', component: ServicesComponent, canActivate: [AuthGuardIn]},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', redirectTo: '/signin'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    GalleryComponent,
    ContactsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    Signin,
    Signup,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
