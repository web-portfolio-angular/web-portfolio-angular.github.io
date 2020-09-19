import { Component, OnInit } from '@angular/core';
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
export class CommentsComponent implements OnInit {
  private subUser: Subscription;
  isAuth = false;
  postForm: FormGroup;
  comments: Comment [];

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
      this.isAuth = !user ? false : true;
    })

    this.firestore.getComments().subscribe(data => {
      this.comments = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Comment
        }
      })
    });

    this.postForm = this.formBuilder.group({
      commentArea: new FormControl(null, Validators.required)
    });
  }

  onSubmit(postForm){
    // if(!this.postForm.valid){
    //   return;
    // }

    const name = 'Name';
    const date = new Date();
    const comment = 'comment';
    const post: Comment = {name, date, comment};
    this.firestore.createComment(post);    
  }
}
