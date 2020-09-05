import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { AuthGuardIn } from '../shared/services/authIn.guard.service';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: GalleryComponent, canActivate: [AuthGuardIn]} 
    ])
  ],
})
export class GalleryModule {}