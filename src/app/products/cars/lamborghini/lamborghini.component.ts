import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/shared/models/car.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styles: []
})
export class LamborghiniComponent implements OnInit {
  isLoading = false;
  lamborghiniCars: Car[];
  errorMsg = null;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.firestore.getLamborghiniCars().subscribe(data => {
      this.lamborghiniCars = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Car
        }
      })
      this.isLoading = false;
      this.errorMsg = null;
      
    }, error => {
      this.isLoading = false;
      this.errorMsg = error;
    });
  }
}