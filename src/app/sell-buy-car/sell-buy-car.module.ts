import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { SellBuyCarComponent } from './sell-buy-car.component';
import { AuthGuardIn } from '../shared/services/authIn.guard.service';
import { AudiComponent } from './buy-car/buy-car-pages/audi/audi.component';
import { BmwComponent } from './buy-car/buy-car-pages/bmw/bmw.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { SharedModule } from '../shared/shared.module';
import { BuyCarItemComponent } from './buy-car-item/buy-car-item.component';

@NgModule({
  declarations: [
    SellBuyCarComponent,
    AudiComponent,
    BmwComponent,
    SellCarComponent,
    BuyCarComponent,
    BuyCarItemComponent    
  ],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    RouterModule.forChild([
      {path: '', component: SellBuyCarComponent, canActivate: [AuthGuardIn],
      children: [
        {path: 'buy', component: BuyCarComponent,
          children: [
            {path: 'audi', component: AudiComponent},
            {path: 'bmw', component: BmwComponent},
            {path: '**', redirectTo: 'audi'}
          ]},
        {path: 'sell', component: SellCarComponent},
        {path: '**', redirectTo: 'buy'}
      ]
      }
    ])
  ]
})
export class SellBuyCarModule {}