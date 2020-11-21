import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CarImagesComponent } from './car-images/car-images.component';
import { RouterModule } from '@angular/router';
import { CategoriesInfoComponent } from './car-categories/categories-info/categories-info.component';
import { CategoriesRouterComponent } from './car-categories/categories-router/categories-router.component';
import { GetUserInfoPipe } from './pipes/get-user-info.pipe';

@NgModule({
	declarations: [
		LoadingSpinnerComponent,
		CarImagesComponent,
		CategoriesInfoComponent,
		CategoriesRouterComponent,
		GetUserInfoPipe
	],
	imports: [
		CommonModule, 
		RouterModule
	],
	exports: [
		LoadingSpinnerComponent,
		CarImagesComponent,
		CategoriesInfoComponent,
		CategoriesRouterComponent,
		GetUserInfoPipe
	]
})
export class SharedModule{}