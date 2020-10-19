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
  isAuth: boolean = false;
  disableButton: boolean = false;
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

  ngOnDestroy(){
    this.subUser.unsubscribe();
    this.navigationMenuSub.unsubscribe();
  }

  navigationInfoState(){
    this.overlayService.navigationInfoState();
  }
  
}
