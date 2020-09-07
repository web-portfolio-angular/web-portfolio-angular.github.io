import { Component, OnInit } from '@angular/core';

import { CarStorateService } from '../car-storage.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styles: []
})
export class PorscheComponent implements OnInit {
  isLoading = false;
  porshceCars: Car[] = [];

  constructor(private carStore: CarStorateService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.carStore.getPorscheCars().subscribe(ressData =>{
      this.porshceCars = ressData;
      this.isLoading = false;
      localStorage.setItem('porshceCars', JSON.stringify(ressData))
    })  
  }
}
