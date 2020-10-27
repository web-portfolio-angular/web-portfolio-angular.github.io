import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styles: [
  ]
})
export class CarItemComponent implements OnInit {
  @Input() car: Car;
  carCurrentImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
