import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, exhaustMap, map } from 'rxjs/operators';

import { Car } from './car.model';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({providedIn: 'root'})
export class CarStorateService{
  constructor(private http: HttpClient, private authService: AuthService){}
  porshceCars: Car[] = [];

  getLamborghiniCars(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Car>('https://portfolio-e1ec5.firebaseio.com/lamborghiniCars.json?auth=' + user.token)
    }), map(ressData =>{
      const carsArray: Car[] = [];
      for(const key in ressData){
        if (ressData.hasOwnProperty(key)){
          carsArray.push({...ressData[key], id: key})
        }
      }
      return carsArray;
    }))
  }

  getPorscheCars(){
    return this.authService.user.pipe(take(1), exhaustMap(user => {
      return this.http.get<Car>('https://portfolio-e1ec5.firebaseio.com/porscheCars.json?auth=' + user.token)
    }), map(ressData =>{
      const carsArray: Car[] = [];
      for(const key in ressData){
        if (ressData.hasOwnProperty(key)){
          carsArray.push({...ressData[key], id: key})
        }
      }
      return carsArray;
    }))
  }
}