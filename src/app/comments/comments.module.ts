import { CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from './comments.component';

@NgModule({
	declarations: [
		CommentsComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{path: '', component: CommentsComponent}
		])
	]
})
export class CommentsModule {}