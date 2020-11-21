import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from './comments.component';
import { SharedModule } from '../shared/shared.module';
import { CommentUserInfoComponent } from './comment-user-info/comment-user-info.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
	declarations: [
		CommentsComponent,
		CommentUserInfoComponent,
		CommentComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{path: '', component: CommentsComponent}
		])
	]
})
export class CommentsModule {}