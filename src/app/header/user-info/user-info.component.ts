import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAdditionalInfo } from '../../shared/models/user-additional-info.model';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Animations } from '../../shared/animations';
import { ThemeService } from '../../shared/services/theme.service';
import { AuthService } from '../../shared/services/auth.service';
import { PhoneCodes } from '../../shared/models/phone-codes.model';
import { OverlayService } from '../../shared/services/overlay.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [],
  animations: [Animations.slideLeftRight]
})
export class UserInfoComponent implements OnInit, OnDestroy {
  userInfo: UserAdditionalInfo[];
  disableButton = false;
  changePhoneForm: FormGroup;
  changePhoneButton = false;
  isChecked: boolean;
  phoneCodes: PhoneCodes[];
  errorMsgOnPhoneChange = null
  errorMsgOnloadPhoneCodes = null;
  userInfoMenuStateSub: Subscription;
  userInfoMenuState: string;

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private themeService: ThemeService,
    private authService: AuthService, 
    private router: Router,
    private overlayService: OverlayService) {}

  ngOnInit() {
    this.userDetails();
    this.changePhoneForm = this.formBuilder.group({});
    this.isChecked = this.themeService.isChecked;

    this.firestore.getPhoneCodes().subscribe(data => {
      this.phoneCodes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as PhoneCodes
        }        
      })
      this.errorMsgOnloadPhoneCodes = null;
    }, error => {
      this.errorMsgOnloadPhoneCodes = error.message;
    });

    this.userInfoMenuStateSub = this.overlayService.userInfoMenuStateSubject.subscribe(string => {
      this.userInfoMenuState = string;      
    })
  }

  userDetails() {
    const userData: {
      email: string,
      id: string,
      _tokenId: string,
      _tokenExpTime: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    this.firestore.getRegistration(userData.email).subscribe(ressData => {
      this.userInfo = ressData.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      localStorage.setItem('userAdditionalData', JSON.stringify(this.userInfo));
      this.changePhoneForm.addControl('phone', new FormControl(this.userInfo[0].phone, Validators.required));
      this.changePhoneForm.addControl('phoneCode', new FormControl(this.userInfo[0].phoneCode, Validators.required));
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('userAdditionalData');
  }

  onSubmit(changePhoneForm) {
    const phoneCode = changePhoneForm.value.phoneCode;
    const phone = changePhoneForm.value.phone;
    const id = this.userInfo[0].id;
    const newIfo = { phoneCode, phone, id };
    this.firestore.updatePhone(newIfo)
      .then(() => {
        this.userDetails();
        this.changePhoneButton = false;
        this.errorMsgOnPhoneChange = null;
      })
      .catch(error => {
        this.errorMsgOnPhoneChange = error.message;
      })
  }

  changeTheme() {
    JSON.parse(localStorage.getItem('theme')) == 'theme-light' ? this.themeService.setDark() : this.themeService.setLight();
    this.isChecked = this.themeService.isChecked;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  swithcUserInfoState(){
    this.overlayService.swithcUserInfoState();    
  }
}