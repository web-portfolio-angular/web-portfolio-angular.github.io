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

  updateComment(comment: Comment){
    this.firestore.doc('comments/' + comment.id).update({
      'comment': comment.comment
    });
  }

  deleteComment(commentsId: string){
    this.firestore.doc('comments/' + commentsId).delete();
  }

  // updateComment(comment: Comment){
  //   this.firestore.doc('comments/' + comment.id).update({
  //     'comment': comment.comment
  //   });
  // }

  // deletePolicy(policyId: string){
  //   this.firestore.doc('policies/' + policyId).delete();
  // }
}
