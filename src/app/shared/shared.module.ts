import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CarImagesComponent } from './car-images/car-images.component';

@NgModule({
	declarations: [
		LoadingSpinnerComponent,
		CarImagesComponent
	],
	imports: [CommonModule],
	exports: [
		LoadingSpinnerComponent,
		CarImagesComponent
	]
})
export class SharedModule{}