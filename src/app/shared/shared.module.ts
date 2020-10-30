import { NgModule } from '@angular/core';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CarImagesComponent } from './car-images/car-images.component';

@NgModule({
	declarations: [
		LoadingSpinnerComponent,
		CarImagesComponent
	],
	exports: [
		LoadingSpinnerComponent,
		CarImagesComponent
	]
})
export class SharedModule{}