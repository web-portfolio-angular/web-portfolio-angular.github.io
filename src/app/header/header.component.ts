import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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


	windowWidthSub: Subscription;
	windowWidth: number;


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

    this.windowWidthSub = this.subjectsService.windowWidthSubject.subscribe(windowWidth => {
      this.windowWidth = windowWidth;    
    })
  }

  ngOnDestroy(){
    this.subUser.unsubscribe();
    this.navigationMenuSub.unsubscribe();
    this.overlaySub.unsubscribe();
    this.disableButtonSub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;    
    this.subjectsService.windowWidthSubject.next(this.windowWidth);
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
