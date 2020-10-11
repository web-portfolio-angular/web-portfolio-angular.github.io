import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class ThemeService {
  switchThemeIcon: string;

  constructor(){}

  getCurrentTheme(){
   const currentTheme = localStorage.getItem('theme');
    if (!currentTheme){
      this.switchThemeIcon = 'theme-dark';  
      return;
    } else {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(currentTheme);
      this.switchThemeIcon = currentTheme;
    }
  }
}