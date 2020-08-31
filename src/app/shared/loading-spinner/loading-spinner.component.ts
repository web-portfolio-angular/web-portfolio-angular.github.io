import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
  <div class="loader-bg">
    <div class="loading">Loading...</div>
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  `,
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
