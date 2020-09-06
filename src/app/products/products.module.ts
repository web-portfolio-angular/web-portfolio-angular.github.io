import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AuthGuardIn } from '../shared/services/authIn.guard.service';
import { LamborghiniComponent } from './cars/lamborghini/lamborghini.component';
import { PorscheComponent } from './cars/porsche/porsche.component';
import { CarItemComponent } from './cars/car-item/car-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    LamborghiniComponent,
    PorscheComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: ProductsComponent, canActivate: [AuthGuardIn],
        children:[
          {path: 'lamborghini', component: LamborghiniComponent},
          {path: 'porsche', component: PorscheComponent},
          {path: '**', redirectTo: ''}
        ]
      }
    ])
  ]
})
export class ProductsModule {}