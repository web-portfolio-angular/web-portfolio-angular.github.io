import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './shared/services/auth.service';
import { OverlayService } from './shared/services/overlay.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Motors';
  private overlaySub: Subscription;
	isOverlayShown: boolean;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService,
    private overlayService: OverlayService){}

  ngOnInit(){
    this.authService.autoLogin();
    this.themeService.getCurrentTheme();
    this.overlaySub = this.overlayService.overlaySubject.subscribe(boolean => {
      this.isOverlayShown = boolean;    
    })
  }

  overlayClick() {
    this.overlayService.overlayClick();    
  }
}
