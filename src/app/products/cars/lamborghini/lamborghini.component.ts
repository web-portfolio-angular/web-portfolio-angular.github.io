import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../car.model';
import {CarStorateService} from '../car-storage.service';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styles: []
})
export class LamborghiniComponent implements OnInit {
  isLoading = true;
  lamborghiniCars: Car[] = [];

  constructor(private http: HttpClient, private carStore: CarStorateService) { }

  ngOnInit(): void {
    this.carStore.getLamborghiniCars().subscribe(ressData =>{
      this.lamborghiniCars = ressData;
    })
  }

  // add(){
  //   this.http.post('https://portfolio-e1ec5.firebaseio.com/porscheCars.json',
  //   {
  //     carImg: 'img1', 
  //     carHoverImg: 'imgHover1', 
  //     carInfo: 'textInfo1', 
  //     carPrice: 1
  //   }).subscribe();    
  // }

}
