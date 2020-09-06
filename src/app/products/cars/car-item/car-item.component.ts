import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styles: [
  ]
})
export class CarItemComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
