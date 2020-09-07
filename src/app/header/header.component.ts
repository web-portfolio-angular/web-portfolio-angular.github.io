import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subUser: Subscription;
  isAuth = false;

  constructor(private authService: AuthService, private router: Router) { }

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
}
