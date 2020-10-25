import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';

import { FirestoreService } from '../shared/services/firestore.service';
import { Comment } from '../shared/models/comment.model';
import { CommentReply } from '../shared/models/comment-reply.model';
import { AuthService } from '../shared/services/auth.service';
import { AdditionUserInfoService } from '../shared/services/user-additional-info.service';
import { UserAdditionalInfo } from '../shared/models/user-additional-info.model';
import { SubjectsService } from '../shared/services/subjects.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class CommentsComponent implements OnInit, OnDestroy {
  private subUser: Subscription;
  private userAdditionalDataSub: Subscription;
  private showUserInfoSub: Subscription;
  private shownUserSub: Subscription;
  userAdditionalData: UserAdditionalInfo[];
  isAuth: boolean = false;
  postForm: FormGroup;
  replyForm: FormGroup;
  comments: Comment [];
  isLoading: boolean = false;  
  isReply: string = null;
  errorMsgOnloadComments: string = null;
  errorMsgOnSubmit: string = null;
  errorMsgOnReply: string = null;  
  shownUser: string;
  showUserInfo: boolean;

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private additionUserInfoService: AdditionUserInfoService,
    private subjectsService: SubjectsService
  ) {}

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
    })

    this.additionUserInfoService.getUserAdditionalData();
    this.userAdditionalDataSub = this.additionUserInfoService.userAdditionalDataSubject.subscribe(userData => {
      this.userAdditionalData = userData;
    })

    this.isLoading = true;
    this.firestore.getComments().subscribe(data => {
      this.comments = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Comment
        }
      })
      this.isLoading = false;
      this.errorMsgOnloadComments = null;
    }, error => {
      this.isLoading = false;
      this.errorMsgOnloadComments = error.message;
    });

    this.postForm = this.formBuilder.group({
      commentArea: new FormControl(null, Validators.required)
    });
    this.replyForm = this.formBuilder.group({
      replyArea: new FormControl(null, Validators.required)
    });
    
    this.shownUserSub = this.subjectsService.shownUserSubject.subscribe(userEmail => {
      this.shownUser = userEmail;
    })
    this.showUserInfoSub = this.subjectsService.showUserInfoSubject.subscribe(boolean => {
      this.showUserInfo = boolean;
    })
  }

  ngOnDestroy(){
    this.subUser.unsubscribe();
    this.userAdditionalDataSub.unsubscribe();
    this.showUserInfoSub.unsubscribe();
    this.shownUserSub.unsubscribe();
  }

  onSubmit(postForm){
    if(!this.postForm.valid){
      return;
    }
    const name = this.userAdditionalData[0].name;
    const email = this.userAdditionalData[0].email;
    const date = firebase.firestore.Timestamp.now();
    const comment = postForm.value.commentArea;
    const post: Comment = {name, email, date, comment};
    this.firestore.createComment(post)
    .then(() => {
      this.postForm.reset();
      this.errorMsgOnSubmit = null;
    })
    .catch(error => {
      this.errorMsgOnSubmit = error.message;
    });    
  }

  onReply(orgCommentId: string, replyForm) {
    if(!this.replyForm.valid){
      return;
    }

    const name = this.userAdditionalData[0].name;
    const email = this.userAdditionalData[0].email;
    const date = firebase.firestore.Timestamp.now();
    const comment = replyForm.value.replyArea;
    const id = this.generateReplayId();
    const commentId = orgCommentId;
    const post: CommentReply = {name, email, date, comment, id, commentId};
    this.firestore.updateComment(post)
    .then(() => {
      this.isReply = null;
      this.replyForm.reset();
      this.errorMsgOnReply = null;
    })
    .catch(error => {
      this.errorMsgOnReply = error.message;
    });
  }

  generateReplayId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < 20; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

  closeReplay() {
    this.isReply = null;
    this.replyForm.reset()
  }
}
