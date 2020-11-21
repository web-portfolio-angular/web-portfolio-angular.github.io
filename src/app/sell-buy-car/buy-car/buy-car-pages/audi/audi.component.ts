import { Component, OnInit } from '@angular/core';

import { CarsForSell } from 'src/app/shared/models/car.model';
import { UserAdditionalInfo } from 'src/app/shared/models/user.model';
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
  ownerDetails: UserAdditionalInfo;

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
    }, error => {
      this.isLoading = false;
      this.errorMsg = error.message;
    });
  }
}
