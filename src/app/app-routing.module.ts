import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)},
  {path: 'products', loadChildren: () => import ('./products/products.module').then(m => m.ProductsModule)},
  {path: 'contacts', loadChildren: () => import ('./contacts/contacts.module').then(m => m.ContactsModule)},
  {path: 'signup', loadChildren: () => import ('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'signin', loadChildren: () => import ('./signin/signin.module').then(m => m.SigninModule)},
  {path: 'gallery', loadChildren: () => import ('./gallery/gallery.module').then(m => m.GalleryModule)},
  {path: 'services', loadChildren: () => import ('./services/services.module').then(m => m.ServicesModule)},
  {path: '**', redirectTo: '/signin'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
