import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { FirestoreService } from '../../shared/services/firestore.service';
import { UserAdditionalInfo } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AdditionUserInfoService {
  userAdditionalDataSubject = new Subject<any>();
  userAdditionalData: UserAdditionalInfo[];

  constructor( private firestore: FirestoreService){}

	getUserAdditionalData(){    
    const userData: {
      name: string,
      phone: number,
      email: string,
      id: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData){
      return
    }

    this.firestore.getRegistration(userData.email).subscribe(ressData => {
      this.userAdditionalData = ressData.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      this.userAdditionalDataSubject.next(this.userAdditionalData);
    })
  }
}
