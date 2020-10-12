import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ThemeService {
  isChecked: boolean;

  constructor() { }

  getCurrentTheme() {
    const currentTheme: {
      theme: string;
    } = JSON.parse(localStorage.getItem('theme'));

    if (!currentTheme) {
      localStorage.setItem('theme', JSON.stringify('theme-light'));      
      document.body.classList.add('theme-light');
      this.isChecked = false;
      console.log(this.isChecked);     
    } else {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(
        JSON.parse(localStorage.getItem('theme'))
      );
      JSON.parse(localStorage.getItem('theme')) == 'theme-light' ? this.isChecked = false : this.isChecked = true;
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