import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/shared/models/car.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styles: []
})
export class PorscheComponent implements OnInit {
  isLoading: boolean = false;
  porshceCars: Car[];
  errorMsg: string = null;

  constructor(
    private firestore: FirestoreService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.firestore.getPorscheCars().subscribe(data => {
      this.porshceCars = data.map(e => {
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
