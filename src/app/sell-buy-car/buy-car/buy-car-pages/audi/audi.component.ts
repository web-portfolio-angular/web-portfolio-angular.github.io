import { Component, OnInit } from '@angular/core';

import { CarsForSell } from 'src/app/shared/models/car.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styles: []
})
export class AudiComponent implements OnInit {
  isLoading: boolean = true;
  audiCars: CarsForSell[];
  errorMsg: string = null;

  constructor(
    private firestore: FirestoreService
  ) {}

  ngOnInit(): void {
    this.firestore.getSecondHandAudi().subscribe(data => {
      this.audiCars = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as CarsForSell
        }
      })
      this.isLoading = false;
      this.errorMsg = null;
      console.log(this.audiCars);          
    }, error => {
      this.isLoading = false;
      this.errorMsg = error.message;
    });
  }
}
