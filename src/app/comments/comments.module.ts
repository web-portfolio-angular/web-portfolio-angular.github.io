import { CommonModule } from '@angular/common';
import {NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommentsComponent } from './comments.component';
import { GetUserInfoPipe } from './get-user-info.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		CommentsComponent,
		GetUserInfoPipe
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