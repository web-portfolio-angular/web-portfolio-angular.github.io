import { CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from './comments.component';

@NgModule({
	declarations: [
		CommentsComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{path: '', component: CommentsComponent}
		])
	]
})
export class CommentsModule {}