import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  currentTheme: {
    theme: string;
  } = JSON.parse(localStorage.getItem('theme'));

  constructor() { }

  getCurrentTheme() {    
    if (!this.currentTheme) {
      localStorage.setItem('theme', JSON.stringify('theme-light'));
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(
        JSON.parse(localStorage.getItem('theme'))
      );
    }
  }

  setLight(){
    localStorage.setItem('theme', JSON.stringify('theme-light'));
    this.getCurrentTheme();
    console.log('light');    
  }

  setDark(){
    localStorage.setItem('theme', JSON.stringify('theme-dark'));
    this.getCurrentTheme();
    console.log('dark');  
  }
}