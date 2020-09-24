import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { UserAdditionalInfo } from '../models/user-additional-info.model';
import { Comment } from '../models/comment.model';


@Injectable({providedIn: 'root'})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  //registrations
  createRegistration(user: UserAdditionalInfo){
    return this.firestore.collection('registrations').add(user);
  }

  getRegistration(email: string) {
    return this.firestore
    .collection('registrations', data => data.where('email', '==', email))
    .snapshotChanges();
  }

  //comments
  createComment(comment: Comment){
    return this.firestore.collection('comments').add(comment);
  }

  getComments() {
    return this.firestore
    .collection('comments', data => data.orderBy('date', 'asc'))
    .snapshotChanges();
  }

  updateComment(orgComment: Comment){
   return this.firestore.doc('comments/' + orgComment.id).update({
      replies: firebase.firestore.FieldValue.arrayUnion({
        name: orgComment.replies[0].name,
        date: orgComment.replies[0].date,
        comment: orgComment.replies[0].comment
      })
    });
  }

  deleteComment(commentId: string){
    return this.firestore.doc('comments/' + commentId).delete();
  }

  //products
  getLamborghiniCars() {
    return this.firestore
    .collection('lamborghiniCars', data => data.orderBy('carPrice', 'asc'))
    .snapshotChanges();
  }
  getPorscheCars() {
    return this.firestore
    .collection('porscheCars', data => data.orderBy('carPrice', 'asc'))
    .snapshotChanges();
  }
}