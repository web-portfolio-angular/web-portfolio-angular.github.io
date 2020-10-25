import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../shared/services/auth.service';
import { Animations } from '../shared/animations';
import { SubjectsService } from '../shared/services/subjects.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  animations: [Animations.slideRightLeft]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subUser: Subscription;
  private navigationMenuSub: Subscription;
  private overlaySub: Subscription;
  private disableButtonSub: Subscription;
  isAuth: boolean = false;
  disableButton: boolean;
  navigationMenuState: string;
  isOverlayShown: boolean;


  constructor(
    private authService: AuthService,
    private subjectsService: SubjectsService) {}

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
     this.isAuth = !user ? false : true;
    })

    this.overlaySub = this.subjectsService.overlaySubject.subscribe(boolean => {
      this.isOverlayShown = boolean;    
    })

    this.navigationMenuSub = this.subjectsService.navigationMenuStateSubject.subscribe(string => {
      this.navigationMenuState = string;
    })

    this.disableButtonSub = this.subjectsService.disableButtonSubject.subscribe(booloean => {
      this.disableButton = booloean;       
    })
  }

  ngOnDestroy(){
    this.subUser.unsubscribe();
    this.navigationMenuSub.unsubscribe();
    this.overlaySub.unsubscribe();
    this.disableButtonSub.unsubscribe();
  }

  swithcNavigationMenuState(){
    this.subjectsService.swithcNavigationMenuState();
  }
  
  overlayClick() {
    this.subjectsService.overlayClick();
  }

  onDisableButton() {
		this.subjectsService.onDisableButton();
	}

	onEnableButton() {
		this.subjectsService.onEnableButton();
	}
}
