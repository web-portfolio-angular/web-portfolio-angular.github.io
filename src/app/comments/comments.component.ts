import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FirestoreService } from '../shared/services/firestore.service';
import { Comment } from '../shared/models/comment.model';
import { Subscription } from 'rxjs';
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
  comments: Comment [];
  isLoading = false;
  errorMsg = null;

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
    const date = new Date().toLocaleString();
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

  reply(name: string, date: string, comment: string, id: string){
    
    const orgComment: Comment = {
      name: name,
      date: date,
      comment: comment,
      replies: [{
        name: 'name',
        date: new Date().toLocaleString(),
        comment: 'comment3'
      }],
      id: id
    }
    this.firestore.updateComment(orgComment)



    // .then(() => {
    //   this.postForm.reset();
    //   this.errorMsg = null;
    // })
    // .catch(error => {
    //   this.errorMsg = error;
    // });    
  }
}
