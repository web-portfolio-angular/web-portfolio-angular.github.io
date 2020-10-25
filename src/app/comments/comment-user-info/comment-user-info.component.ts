import { Component, Input, OnInit } from '@angular/core';

import { SubjectsService } from '../../shared/services/subjects.service';

@Component({
  selector: 'app-comment-user-info',
  templateUrl: './comment-user-info.component.html',
  styles: [
  ]
})
export class CommentUserInfoComponent implements OnInit {
  @Input() email: string;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
  }

  closeUserInfo() {
    this.subjectsService.overlayClick();
  }
}
