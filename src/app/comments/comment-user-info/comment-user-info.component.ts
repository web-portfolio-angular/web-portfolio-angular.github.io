import { Component, Input, OnInit } from '@angular/core';

import { UserAdditionalInfo } from 'src/app/shared/models/user.model';
import { SubjectsService } from '../../shared/services/subjects.service';

@Component({
  selector: 'app-comment-user-info',
  templateUrl: './comment-user-info.component.html',
  styles: [
  ]
})
export class CommentUserInfoComponent implements OnInit {
  @Input() shownUser: UserAdditionalInfo;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
  }

  closeUserInfo() {
    this.subjectsService.overlayClick();
  }
}
