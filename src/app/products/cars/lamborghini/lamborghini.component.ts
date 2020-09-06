import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Car } from '../car.model';
import {CarStorateService} from '../car-storage.service';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styles: []
})
export class LamborghiniComponent implements OnInit {
  private subUser: Subscription;

  lamborghiniCars: Car[] = [
    new Car ('img1', 'imgHover1', 'textInfo1', 1),
    new Car ('img2', 'imgHover2', 'textInfo2', 2),
    new Car ('img3', 'imgHover3', 'textInfo3', 3)
  ];

  constructor(private http: HttpClient, private carStore: CarStorateService) { }

  ngOnInit(): void {
    this.carStore.getLamborghiniCars()
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
