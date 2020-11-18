import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductLink } from '../shared/models/car.model';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { SubjectsService } from '../shared/services/subjects.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit, OnDestroy {
  private isLoadingSub: Subscription;
  private getCarLinksErrorMsgSub: Subscription;
  isLoading: boolean;
  getCarLinksErrorMsg: string;
  carLinks: ProductLink[] = [];

  constructor(
    private router: Router,
    private firestore: FirestoreService,
    private subjectsService: SubjectsService
  ) { }

  ngOnInit() {
    this.isLoadingSub = this.subjectsService.isLoadingSubject.subscribe(boolean => {
      this.isLoading = boolean;
    })
    this.getCarLinksErrorMsgSub = this.subjectsService.getCarLinksErrorMsgSubject.subscribe(error => {
      this.getCarLinksErrorMsg = error;
    })

    this.firestore.getProductLinks().subscribe(data => {
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

    const lastVisitedLink: {
      productsLink: string
    } = JSON.parse(localStorage.getItem('productsLink'));

    if (lastVisitedLink) {
      this.router.navigate([lastVisitedLink]);
    }
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
    this.getCarLinksErrorMsgSub.unsubscribe();
  }
}
