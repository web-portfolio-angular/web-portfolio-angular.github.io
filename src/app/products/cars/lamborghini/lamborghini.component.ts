import { Component, OnInit } from '@angular/core';

import { Car } from '../car.model';
import {CarStorateService} from '../car-storage.service';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styles: []
})
export class LamborghiniComponent implements OnInit {
  isLoading = false;
  lamborghiniCars: Car[] = [];

  constructor(private carStore: CarStorateService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.carStore.getLamborghiniCars().subscribe(ressData =>{
      this.lamborghiniCars = ressData;
      this.isLoading = false;
    })
  }
}
