import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

import { UserAdditionalInfo } from '../models/user.model';
import { Comment, CommentReply } from '../models/comment.model';
import { SellBuyCar } from '../models/car.model';

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

  //products
  getProductLinks() {
    return this.firestore
    .collection('productLinks', data => data.orderBy('date', 'asc'))
    .snapshotChanges();
  }

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

  //buy/sell a car
  getCarModels() {
    return this.firestore
    .collection('carModels', data => data.orderBy('car', 'asc'))
    .snapshotChanges();
  }

  getCarManufactureYear() {
    return this.firestore
    .collection('carManufactureYear', data => data.orderBy('year', 'desc'))
    .snapshotChanges();
  }

  sellBuyCar(car: SellBuyCar) {
    return this.firestore.collection('sellBuyCars/').doc(car.id).set(car);
  }

  getSecondHandCars() {
    return this.firestore
    .collection('sellBuyCars', data => data.orderBy('date', 'desc'))
    .snapshotChanges();
  }
}