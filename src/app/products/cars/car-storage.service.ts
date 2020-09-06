import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, exhaustMap, map } from 'rxjs/operators';

import { Car } from './car.model';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class CarStorateService{
  constructor(private http: HttpClient, private authService: AuthService){}

  getLamborghiniCars(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get('https://portfolio-e1ec5.firebaseio.com/lamborghiniCars.json?auth=' + user.token)
    })).subscribe(data =>{
      console.log(data);      
    }, error =>{
      console.log(error);      
    });
  }

  lamborghiniCars: Car[] = [
    new Car ('img1', 'imgHover1', 'textInfo1', 1),
    new Car ('img2', 'imgHover2', 'textInfo2', 2),
    new Car ('img3', 'imgHover3', 'textInfo3', 3)
  ];

  porscheCars: Car[] = [
    new Car ('img1', 'imgHover1', 'textInfo1', 1),
    new Car ('img2', 'imgHover2', 'textInfo2', 2),
    new Car ('img3', 'imgHover3', 'textInfo3', 3)
  ];
}