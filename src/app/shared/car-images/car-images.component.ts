import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styles: [
  ]
})
export class CarImagesComponent implements OnInit {
  @Input() carImgs;

  constructor() { }

  ngOnInit(): void {
    console.log(this.carImgs);
    
  }
}