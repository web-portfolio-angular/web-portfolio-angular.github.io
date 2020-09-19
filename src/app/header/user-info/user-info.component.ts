import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserAdditionalInfo } from 'src/app/shared/models/user-additional-info.model';

import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent implements OnInit, OnDestroy {
  userInfo: UserAdditionalInfo [];
 
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.userDetails();
  }

  userDetails(){
    const userData: {
      email: string,
      id: string,
      _tokenId: string,
      _tokenExpTime: string
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){     
      return;
    }
    this.firestore.getRegistration(userData.email).subscribe(ressData => {
      this.userInfo = ressData.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      localStorage.setItem('userAdditionalData', JSON.stringify(this.userInfo))
    })
  }

  ngOnDestroy(){
    localStorage.removeItem('userAdditionalData');
  }
}