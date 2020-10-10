import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/services/auth.service';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Motors';  

  constructor(
    private authService: AuthService,
    private themeService: ThemeService){}

  ngOnInit(){
    this.authService.autoLogin();
    this.themeService.getCurrentTheme();
  }
}
