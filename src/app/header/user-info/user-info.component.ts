import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

import { UserAdditionalInfo } from 'src/app/shared/models/user-additional-info.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Animations } from 'src/app/shared/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/shared/services/theme.service';

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
  @ViewChild('phone') phone: ElementRef;
  changePhoneForm: FormGroup;
  changePhoneButton = false;
  errorMsg = null;
  theme = localStorage.getItem('theme');

  constructor(
    private firestore: FirestoreService, 
    private renderer2: Renderer2,
    private formBuilder: FormBuilder,
    private themeService: ThemeService) {
    this.renderer2.listen('document', 'click', (e: Event) => {
      if ((this.content && this.content.nativeElement.contains(e.target)) || 
          (this.button && this.button.nativeElement.contains(e.target))) {        
          return
         } else {
          this.menuState = 'out';
          this.disableButton = false;
       }
    });
  }

  ngOnInit(): void {
    this.userDetails();    
    this.changePhoneForm = this.formBuilder.group({});
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
      localStorage.setItem('userAdditionalData', JSON.stringify(this.userInfo));
      this.changePhoneForm.addControl('phone', new FormControl(this.userInfo[0].phone, Validators.required))
    })
  }

  ngOnDestroy(){
    localStorage.removeItem('userAdditionalData');
  }

  ebablePhoneChange(event){
    event.stopPropagation();
    this.changePhoneButton = true; 
  }

  disablePhoneChange(event){
    event.stopPropagation();
    this.changePhoneButton = false;  
  }
  
  onSubmit(changePhoneForm){
    const phone = changePhoneForm.value.phone;
    const id = this.userInfo[0].id;
    const newIfo = {phone, id};    
    this.firestore.updatePhone(newIfo)
    .then(() => {
      this.userDetails();
      this.changePhoneButton = false;
    })
    .catch(error => {
      this.errorMsg = error;
    })
  }

  changeTheme(){
    this.theme == 'theme-light' ? this.theme = 'theme-dark' : this.theme = 'theme-light';
    localStorage.setItem('theme', this.theme);
    this.themeService.getCurrentTheme();
  }
}
