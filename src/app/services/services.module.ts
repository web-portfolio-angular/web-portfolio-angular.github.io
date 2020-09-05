import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { AuthGuardIn } from '../shared/services/authIn.guard.service';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: ServicesComponent, canActivate: [AuthGuardIn]} 
    ])
  ],
})
export class ServicesModule {}