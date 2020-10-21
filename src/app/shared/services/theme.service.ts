import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  darkMode: boolean;

  constructor() { }

  getCurrentTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'));

    if (!currentTheme) {
      localStorage.setItem('theme', JSON.stringify('theme-light'));      
      document.body.classList.add('theme-light');
      this.darkMode = false;   
    } else {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(currentTheme);
      currentTheme == 'theme-light' ? this.darkMode = false : this.darkMode = true;      
    }
  }

  setLight(){
    localStorage.setItem('theme', JSON.stringify('theme-light'));
    this.getCurrentTheme();  
  }

  setDark(){
    localStorage.setItem('theme', JSON.stringify('theme-dark'));
    this.getCurrentTheme();
  }
}