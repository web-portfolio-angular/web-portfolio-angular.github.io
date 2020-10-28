import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Comment } from '../../shared/models/comment.model';
import { SubjectsService } from '../../shared/services/subjects.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: []
})
export class CommentComponent implements OnInit, OnDestroy {
  @Input() comment: Comment;
  private shownUserSub: Subscription;
  showUserInfo: boolean;
  shownUser: string;

  constructor(
    private subjectsService: SubjectsService
  ) {}

  ngOnInit(): void {
    this.shownUserSub = this.subjectsService.shownUserSubject.subscribe(userEmail => {
      this.shownUser = userEmail;
    })
  }

  ngOnDestroy() {
    this.shownUserSub.unsubscribe();
  }

  onShowUserInfo(email: string) {
    this.subjectsService.onShowUserInfo(email);
  }
}
