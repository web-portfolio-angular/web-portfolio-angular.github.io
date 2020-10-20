import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserAdditionalInfo } from '../../shared/models/user-additional-info.model';
import { FirestoreService } from '../../shared/services/firestore.service';
import { Animations } from '../../shared/animations';
import { ThemeService } from '../../shared/services/theme.service';
import { AuthService } from '../../shared/services/auth.service';
import { PhoneCodes } from '../../shared/models/phone-codes.model';
import { OverlayService } from '../../shared/services/overlay.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [],
  animations: [Animations.slideLeftRight]
})
export class UserInfoComponent implements OnInit, OnDestroy {
  private userInfoMenuStateSub: Subscription;
  userInfo: UserAdditionalInfo[];
  disableButton: boolean = false;
  changePhoneForm: FormGroup;
  changePhoneButton: boolean = false;
  isChecked: boolean;
  phoneCodes: PhoneCodes[];
  errorMsgOnPhoneChange: string = null
  errorMsgOnloadPhoneCodes: string = null;
  userInfoMenuState: string;
  isInChangeImgMode: boolean = false;
  file: any;
  defaultImg: string;
  imgLocalPath: string;
  imgName: string;
  errorMsgOnAvatarUpload: string;
  isLoading = false;

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    private themeService: ThemeService,
    private authService: AuthService, 
    private router: Router,
    private overlayService: OverlayService,
    private angularFireStorage: AngularFireStorage
  ) {}

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

  ngOnDestroy() {
    localStorage.removeItem('userAdditionalData');
    this.userInfoMenuStateSub.unsubscribe();
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
      this.defaultImg = this.userInfo[0].userImg;
      this.imgLocalPath = this.defaultImg;
    })
  }


  onSubmit(changePhoneForm) {
    const phoneCode = changePhoneForm.value.phoneCode;
    const phone = changePhoneForm.value.phone;
    const id = this.userInfo[0].id;
    const newIfo = { phoneCode, phone, id };
    this.firestore.updatePhone(newIfo)
      .then(() => {
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

  swithcUserInfoState() {
    this.overlayService.swithcUserInfoState();    
  }

  uploadAvatar(event) {
    this.file = event.target.files[0];  
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgLocalPath = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.imgName = this.file.name.substr(0, this.file.name.lastIndexOf('.'));
    } else {
      this.imgLocalPath = this.defaultImg;
    }  
  }

  uploadAvatarToFirestorage() {
    this.isLoading = true;
    this.angularFireStorage.upload("/userImages/" + this.imgName + "-" + Math.random().toString(36).substring(2), this.file)
    .then(uploadTask => {
      uploadTask.ref.getDownloadURL().then(url => {
        const userImg = url;
        const id = this.userInfo[0].id;
        const newIfo = { userImg, id };
        this.firestore.updateUserImg(newIfo)
        .then(() => {
          this.isInChangeImgMode = false;
          this.errorMsgOnAvatarUpload = null;
        })
        .catch(error => {
          this.errorMsgOnAvatarUpload = error.message;
        })
      })      
      this.errorMsgOnAvatarUpload = null;
      this.isLoading = false; 
    })
    .catch(error => {
      this.errorMsgOnAvatarUpload = error.message;
      this.isLoading = false;  
    });
  }
}