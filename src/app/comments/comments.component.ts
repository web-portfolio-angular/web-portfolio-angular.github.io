import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';

import { FirestoreService } from '../shared/services/firestore.service';
import { Comment } from '../shared/models/comment.model';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class CommentsComponent implements OnInit, OnDestroy {
  private subUser: Subscription;
  isAuth = false;
  postForm: FormGroup;
  replyForm: FormGroup;
  comments: Comment [];
  isLoading = false;
  errorMsg = null;
  isReply = null;

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
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
      this.errorMsg = null;
    }, error => {
      this.isLoading = false;
      this.errorMsg = error;
    });

    this.postForm = this.formBuilder.group({
      commentArea: new FormControl(null, Validators.required)
    });
    this.replyForm = this.formBuilder.group({
      replyArea: new FormControl(null, Validators.required)
    });         
  }

  ngOnDestroy(){
    this.subUser.unsubscribe();
  }

  onSubmit(postForm){
    if(!this.postForm.valid){
      return;
    }
    const userAdditionalData: {
      name: string,
      phone: number,
      email: string,
      id: string
    } = JSON.parse(localStorage.getItem('userAdditionalData'))
    if(!userAdditionalData){
      return;
    }
    const name = userAdditionalData[0].name;
    const date = firebase.firestore.Timestamp.now();
    const comment = postForm.value.commentArea;
    const post: Comment = {name, date, comment};
    this.firestore.createComment(post)
    .then(() => {
      this.postForm.reset();
      this.errorMsg = null;
    })
    .catch(error => {
      this.errorMsg = error;
    });    
  }

  reply(commentId: string){
    this.isReply = commentId;
  }

  onReply(name: string, date: firebase.firestore.Timestamp, comment: string, id: string, replyForm){    
    if(!this.replyForm.valid){
      return;
    }
    const userAdditionalData: {
      name: string,
      phone: number,
      email: string,
      id: string
    } = JSON.parse(localStorage.getItem('userAdditionalData'))
    if(!userAdditionalData){
      return;
    }
    const orgComment: Comment = {
      name: name,
      date: date,
      comment: comment,
      replies: [{
        name: userAdditionalData[0].name,
        date: firebase.firestore.Timestamp.now(),
        comment: replyForm.value.replyArea
      }],
      id: id
    }
    this.firestore.updateComment(orgComment)
    .then(() => {
      this.isReply = null;
      this.replyForm.reset();
      this.errorMsg = null;
    })
    .catch(error => {
      this.errorMsg = error;
    });
  }
}
