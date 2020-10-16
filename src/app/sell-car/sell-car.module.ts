import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SellCarComponent } from './sell-car.component';
import { AuthGuardIn } from '../shared/services/authIn.guard.service';

@NgModule({
  declarations: [
    SellCarComponent
  ],
  imports: [ 
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SellCarComponent, canActivate: [AuthGuardIn]
      }
    ])
  ]
})
export class SellCarModule {}