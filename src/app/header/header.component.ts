import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { Animations } from '../shared/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
  animations: [Animations.slideRightLeft]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subUser: Subscription;
  isAuth = false;
  menuState = 'out';
  disableButton = false;
  @ViewChild('button') button: ElementRef;
  @ViewChild('content') content: ElementRef;

  constructor(private authService: AuthService, private router: Router, private renderer2: Renderer2) {
    this.renderer2.listen('document', 'click', (e: Event) => {
      if ((this.content && this.content.nativeElement.contains(e.target)) || (this.button && this.button.nativeElement.contains(e.target))) {
          return
         } else {
          this.menuState = 'out';
          this.disableButton = false;
       }
    });
  }

  ngOnInit() {
    this.subUser = this.authService.user.subscribe(user => {
     this.isAuth = !user ? false : true;
    })
  }
  
  ngOnDestroy(){
    this.subUser.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  switchNavMenu(){
    this.menuState == 'in' ? this.menuState = 'out' : this.menuState = 'in';
  }

  clickOutside(){
    if (this.menuState == 'out'){
      return
    }
    this.menuState = 'out';
    this.disableButton = false;
  }
}
