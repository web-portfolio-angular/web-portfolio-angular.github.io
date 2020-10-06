import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

import { UserAdditionalInfo } from 'src/app/shared/models/user-additional-info.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [],
  animations: [Animations.slideLeftRight]
})
export class UserInfoComponent implements OnInit, OnDestroy {
  userInfo: UserAdditionalInfo [];
  showUserInfo = false;
  menuState = 'out';
  disableButton = false;
  @ViewChild('button') button: ElementRef;
  @ViewChild('content') content: ElementRef;

  constructor(private firestore: FirestoreService, private renderer2: Renderer2) {
    this.renderer2.listen('document', 'click', (e: Event) => {
      if ((this.content && this.content.nativeElement.contains(e.target)) || (this.button && this.button.nativeElement.contains(e.target))) {
          return
         } else {
          this.menuState = 'out';
          this.disableButton = false;
       }
    });
  }

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
