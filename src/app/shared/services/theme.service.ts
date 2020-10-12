import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  isChecked: boolean;

  constructor() { }

  getCurrentTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'));

    if (!currentTheme) {
      localStorage.setItem('theme', JSON.stringify('theme-light'));      
      document.body.classList.add('theme-light');
      this.isChecked = false;   
    } else {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(currentTheme);
      currentTheme == 'theme-light' ? this.isChecked = false : this.isChecked = true;      
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