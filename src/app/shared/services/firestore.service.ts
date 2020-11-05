import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { UserAdditionalInfo } from '../models/user-additional-info.model';
import { Comment } from '../models/comment.model';
import { CommentReply } from '../models/comment-reply.model';

@Injectable({providedIn: 'root'})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  // phone codes
  getPhoneCodes() {
    return this.firestore
    .collection('phoneCodes', data => data.orderBy('abbreviation', 'asc'))
    .snapshotChanges();
  }

  //registrations
  createRegistration(user: UserAdditionalInfo){
    return this.firestore.collection('registrations').add(user);
  }

  updatePhone(newInfo){
    return this.firestore.doc('registrations/' + newInfo.id).update({
      phoneCode: newInfo.phoneCode,
      phone: newInfo.phone
     });
   }

   updateUserImg(newInfo){
    return this.firestore.doc('registrations/' + newInfo.id).update({
      userImg: newInfo.userImg
     });
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

  updateComment(post: CommentReply){
   return this.firestore.doc('comments/' + post.commentId).update({
      replies: firebase.firestore.FieldValue.arrayUnion({
        name: post.name,
        email: post.email,
        date: post.date,
        comment: post.comment,
        id: post.id
      })
    });
  }

  deleteComment(commentId: string){
    return this.firestore.doc('comments/' + commentId).delete();
  }

  //products
  getLamborghiniCars() {
    return this.firestore
    .collection('lamborghiniCars', data => data.orderBy('dateCreation', 'desc'))
    .snapshotChanges();
  }
  
  getPorscheCars() {
    return this.firestore
    .collection('porscheCars', data => data.orderBy('dateCreation', 'desc'))
    .snapshotChanges();
  }
}