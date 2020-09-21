import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserAdditionalInfo } from '../models/user-additional-info.model';
import { Comment } from '../models/comment.model';

@Injectable({providedIn: 'root'})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  createRegistration(user: UserAdditionalInfo){
    return this.firestore.collection('registrations').add(user);
  }

  getRegistration(email: string) {
    return this.firestore
    .collection('registrations', data => data.where('email', '==', email))
    .snapshotChanges();
  }

  createComment(comment: Comment){
    return this.firestore.collection('comments').add(comment);
  }

  getComments() {
    return this.firestore
    .collection('comments', data => data.orderBy('date', 'asc'))
    .snapshotChanges();
  }

  updateComment(orgComment: Comment){
    this.firestore.doc('comments/' + orgComment.id).update({
      // 'reply.name': orgComment.reply.name,
      // 'reply.date': orgComment.reply.date,
      // 'reply.comment': orgComment.reply.comment,
    });
  }

  // updateComment(comment: Comment){
  //   this.firestore.doc('comments/' + comment.id).update({
  //     'comment': comment.comment
  //   });
  // }

  deleteComment(commentId: string){
    this.firestore.doc('comments/' + commentId).delete();
  }
}
