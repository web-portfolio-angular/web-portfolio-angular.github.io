import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';

import { UserAdditionalInfo } from '../models/user.model';
import { Comment, CommentReply } from '../models/comment.model';
import { CarsForSell } from '../models/car.model';

@Injectable({providedIn: 'root'})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  delete(url) {
    return this.storage.storage.refFromURL(url).delete();
  }

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
  getSecondHandCarsLink() {
    return this.firestore
    .collection('buyCarLinks', data => data.orderBy('date', 'asc'))
    .snapshotChanges();
  }

  getCarManufactureYear() {
    return this.firestore
    .collection('carManufactureYear', data => data.orderBy('year', 'desc'))
    .snapshotChanges();
  }

  setSecondHandCar(car: CarsForSell) {
    return this.firestore.collection(car.model + '/').doc(car.id).set(car);
  }

  getSecondHandAudi() {
    return this.firestore
    .collection('Audi', data => data.orderBy('date', 'desc'))
    .snapshotChanges();
  }

  getSecondHandBMW() {
    return this.firestore
    .collection('BMW', data => data.orderBy('date', 'desc'))
    .snapshotChanges();
  }

  updateSecondHandCar(newInfo){
    return this.firestore.doc(newInfo.doc + '/' + newInfo.id).update({
      carImg: newInfo.carImg,
      description: newInfo.description,
      price: newInfo.price     
     })
  }

  updateSecondHanImagesCar(img){
    return this.firestore.doc(img.doc + '/' + img.id).update({
      carImages: firebase.firestore.FieldValue.arrayUnion(img.img)
    });
  }

  setSecondHanCurrentImages(newInfo){
    return this.firestore.doc(newInfo.doc + '/' + newInfo.id).update({
      carImages: newInfo.currentImgs
    });
  }
}