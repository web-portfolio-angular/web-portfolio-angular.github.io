import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductLink } from 'src/app/shared/models/car.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { SubjectsService } from 'src/app/shared/services/subjects.service';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styles: [
  ]
})
export class BuyCarComponent implements OnInit, OnDestroy {
  private isLoadingSub: Subscription;
  private getCarLinksErrorMsgSub: Subscription;
  isLoading: boolean;
  getCarLinksErrorMsg: string;
  carLinks: ProductLink[] = [];

  constructor(
    private firestore: FirestoreService,
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.isLoadingSub = this.subjectsService.isLoadingSubject.subscribe(boolean => {
      this.isLoading = boolean;
    })
    this.getCarLinksErrorMsgSub = this.subjectsService.getCarLinksErrorMsgSubject.subscribe(error => {
      this.getCarLinksErrorMsg = error;
    })

    this.firestore.getSecondHandCars().subscribe(data => {
      this.carLinks = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as ProductLink
        }
      })
      this.subjectsService.loaded();
      this.subjectsService.clearGetProductLinksError();
    }, error => {
      this.subjectsService.loaded();
      this.subjectsService.onGetProductLinksError(error);
    });
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
    this.getCarLinksErrorMsgSub.unsubscribe();
  }
}
