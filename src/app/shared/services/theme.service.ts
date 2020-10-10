import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class ThemeService {
  constructor(){}

  getCurrentTheme(){
   const currentTheme = localStorage.getItem('theme');
    if (!currentTheme){      
      return;
    } else {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(currentTheme);
    }
  }
}