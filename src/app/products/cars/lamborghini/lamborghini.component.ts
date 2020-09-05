import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styles: []
})
export class LamborghiniComponent implements OnInit {
  lamborghiniCars: Car[] = [
    new Car ('img1', 'imgHover1', 'textInfo1', 1),
    new Car ('img2', 'imgHover2', 'textInfo2', 2),
    new Car ('img3', 'imgHover3', 'textInfo3', 3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
