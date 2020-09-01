import { NgModule } from '@angular/core';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
	declarations: [
		LoadingSpinnerComponent,
		FooterComponent
	],
	exports: [
		LoadingSpinnerComponent,
		FooterComponent
	]
})
export class SharedModule{}