import { CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from './comments.component';
import { ReplacePipe } from './replace-pipe';

@NgModule({
	declarations: [
		CommentsComponent,
		ReplacePipe
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