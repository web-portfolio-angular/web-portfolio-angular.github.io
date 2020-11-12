import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  darkMode: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  getCurrentTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'));

    if (!currentTheme) {
      localStorage.setItem('theme', JSON.stringify('theme-light'));      
      document.documentElement.classList.add('theme-light');
      this.darkMode = false;   
    } else {
      document.documentElement.classList.remove('theme-light', 'theme-dark');
      document.documentElement.classList.add(currentTheme);
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