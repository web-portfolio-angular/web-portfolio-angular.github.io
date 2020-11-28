import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isLoading: boolean;
  getCarLinksErrorMsg: string;
  carLinks: ProductLink[] = [];

  constructor(
    private firestore: FirestoreService,
    private subjectsService: SubjectsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoadingSub = this.subjectsService.isLoadingSubject.subscribe(boolean => {
      this.isLoading = boolean;
    })

    this.firestore.getSecondHandCarsLink().subscribe(data => {
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
    } = JSON.parse(localStorage.getItem('sell-buy-car/buy-LastVisitedLink'));

    if (lastVisitedLink) {
      this.router.navigate([lastVisitedLink]);      
    }  
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
  }
}
