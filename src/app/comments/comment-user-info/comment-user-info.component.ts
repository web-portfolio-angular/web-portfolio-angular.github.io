import { Component, Input, OnInit } from '@angular/core';

import { OverlayService } from '../../shared/services/overlay.service';

@Component({
  selector: 'app-comment-user-info',
  templateUrl: './comment-user-info.component.html',
  styles: [
  ]
})
export class CommentUserInfoComponent implements OnInit {
  @Input() email: string;

  constructor(
    private overlayService: OverlayService
  ) { }

  ngOnInit(): void {
  }

  closeUserInfo() {
    this.overlayService.overlayClick();
  }
}
