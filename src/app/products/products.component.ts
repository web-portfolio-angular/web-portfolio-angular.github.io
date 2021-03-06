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

    this.firestore.getProductLinks().subscribe(data => {
      this.carLinks = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as ProductLink
        }
      })
      this.subjectsService.loaded();
      this.getCarLinksErrorMsg = null;
    }, error => {
      this.subjectsService.loaded();
      this.getCarLinksErrorMsg = error.message;
    });

    const lastVisitedLink: {
      lastVisitedLink: string
    } = JSON.parse(localStorage.getItem('products-LastVisitedLink'));

    if (lastVisitedLink) {
      this.router.navigate([lastVisitedLink]);
    }    
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
  }
}
