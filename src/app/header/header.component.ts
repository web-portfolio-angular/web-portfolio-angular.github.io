import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../shared/services/auth.service';
import { Animations } from '../shared/animations';
import { OverlayService } from '../shared/services/overlay.service';

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
  isAuth: boolean = false;
  disableButton: boolean = false;
  navigationMenuState: string;
  isOverlayShown: boolean;


  constructor(
    private authService: AuthService,
    private overlayService: OverlayService) {}

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
     this.isAuth = !user ? false : true;
    })

    this.overlaySub = this.overlayService.overlaySubject.subscribe(boolean => {
      this.isOverlayShown = boolean;    
    })

    this.navigationMenuSub = this.overlayService.navigationMenuStateSubject.subscribe(string => {
      this.navigationMenuState = string;
    })
  }

  ngOnDestroy(){
    this.subUser.unsubscribe();
    this.navigationMenuSub.unsubscribe();
    this.overlaySub.unsubscribe();
  }

  navigationInfoState(){
    this.overlayService.navigationInfoState();
  }
  
  overlayClick() {
    this.overlayService.overlayClick();
  }
}
