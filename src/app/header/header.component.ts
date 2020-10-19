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
  isAuth = false;
  disableButton = false;
  navigationMenuSub: Subscription;
  navigationMenuState: string;


  constructor(
    private authService: AuthService,
    private overlayService: OverlayService) {}

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
     this.isAuth = !user ? false : true;
    })

    this.navigationMenuSub = this.overlayService.navigationMenuStateSubject.subscribe(string => {
      this.navigationMenuState = string;    
    })
  }

  navigationInfoState(){
    this.overlayService.navigationInfoState();
  }
  
  ngOnDestroy(){
    this.subUser.unsubscribe();
  }
}
