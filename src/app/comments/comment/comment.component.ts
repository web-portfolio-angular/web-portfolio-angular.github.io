import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAdditionalInfo } from 'src/app/shared/models/user.model';

import { FirestoreService } from 'src/app/shared/services/firestore.service';
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
  errorMsgOnGetUser: string = null;

  constructor(
    private subjectsService: SubjectsService,
    private firestore: FirestoreService,
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
    this.firestore.getRegistration(email).subscribe(data => {
      const user = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      const userImg = user[0].userImg;
      const name = user[0].name;
      const phoneCode = user[0].phoneCode;
      const phone = user[0].phone;
      const email = user[0].email;
      const shownUser = {userImg, name, phoneCode, phone, email};
      this.subjectsService.onShowUserInfo(shownUser);      
      this.errorMsgOnGetUser = null;
    }, error => {
      this.errorMsgOnGetUser = error.message;
    });
  }  
}
