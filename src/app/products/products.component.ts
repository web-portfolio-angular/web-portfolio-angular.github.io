import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 
import { FirestoreService } from '../shared/services/firestore.service';
import * as firebase from 'firebase/app';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private firestore: FirestoreService,
  ) {}

  ngOnInit() {
    const lastVisitedLink: {
      productsLink: string
    } = JSON.parse(localStorage.getItem('productsLink'));
    
    if (lastVisitedLink){
      this.router.navigate([lastVisitedLink])
    } else{
      this.router.navigate(['products/lamborghini']) 
    }    
  }

  saveToLocalStore(data: string){
    localStorage.setItem('productsLink', JSON.stringify('/products/' + data));
  }

  //
  l1:Car = {
    carImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Flamborghini%2F0%2Flamborghini1.jpg?alt=media&token=2e2930e9-2f3d-45d8-93c9-06aa2b1c0fa7', 
    carHoverImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Flamborghini%2F0%2Flamborghini2.jpg?alt=media&token=bc642b43-f748-450d-9577-e8d1a0a61515',
    carInfo: 'Lorem ipsum dolor, sit amet consectetur.',
    carPrice: 312000,
    dateCreation: firebase.firestore.Timestamp.now()
  };

  l2:Car = {
    carImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Flamborghini%2F1%2Flamborghini1.jpg?alt=media&token=a30f5006-14f4-469a-aa0c-51b94264bf85', 
    carHoverImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Flamborghini%2F1%2Flamborghini2.jpg?alt=media&token=cc384457-f391-4679-ad02-3e3b96bb2a5c',
    carInfo: 'Lorem ipsum dolor, sit amet consectetur.',
    carPrice: 299000,
    dateCreation: firebase.firestore.Timestamp.now()
  };
  
  p1 = {
    carImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Fporsche%2F0%2Fporche1.jpg?alt=media&token=3bbae00e-9ce9-461d-9756-0f172d74b8c7', 
    carHoverImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Fporsche%2F0%2Fporche2.jpg?alt=media&token=3da7b03b-cc44-4cba-87c6-5a9704e22d56',
    carInfo: 'Lorem ipsum dolor, sit amet consectetur.',
    carPrice: 195000,
    dateCreation: firebase.firestore.Timestamp.now()
  };

  p2 = {
    carImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Fporsche%2F1%2Fporche1.jpg?alt=media&token=d43754d9-1725-41a8-92cd-890807068ad0', 
    carHoverImg: 'https://firebasestorage.googleapis.com/v0/b/portfolio-e1ec5.appspot.com/o/productCategories%2Fporsche%2F1%2Fporche2.jpg?alt=media&token=bf329792-e8a2-41c7-adb6-8585731455b3', 
    carInfo: 'Lorem ipsum dolor, sit amet consectetur.',
    carPrice: 135000,
    dateCreation: firebase.firestore.Timestamp.now()
  };

  addL1(){
    this.firestore.setLamborghiniCars(this.l1);
  }
  addL2(){
    this.firestore.setLamborghiniCars(this.l2);
  }
  addP1(){
    this.firestore.setPorscheCars(this.p1);
  }
  addP2(){
    this.firestore.setPorscheCars(this.p2);
  }
}
