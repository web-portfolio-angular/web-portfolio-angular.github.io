import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserAdditionalInfo } from '../models/user-additional-info.model'

@Injectable({providedIn: 'root'})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {}

  createRegistration(user: UserAdditionalInfo){
    return this.firestore.collection('registrations').add(user);
  }

  getRegistration(email: string) {
    return this.firestore.collection('registrations', ressData => ressData.where('email', '==', email)).snapshotChanges();
  }
}
