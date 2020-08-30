import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './auth.guard.service';


const routes: Routes = [
  // {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard]},
  {path: 'services', component: ServicesComponent, canActivate: [AuthGuard]},
  {path: 'contacts', component: ContactsComponent}
  // {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
