import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-categories-router',
  templateUrl: './categories-router.component.html',
  styles: [
  ]
})
export class CategoriesRouterComponent implements OnInit, OnDestroy {
  @Input() productLinks;
  private isLoadingSub: Subscription;
  private getProductLinksErrorMsgSub: Subscription;
  isLoading: boolean;
  getProductLinksErrorMsg: string;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.isLoadingSub = this.subjectsService.isLoadingSubject.subscribe(boolean => {
      this.isLoading = boolean;
    })
    this.getProductLinksErrorMsgSub = this.subjectsService.getProductLinksErrorMsgSubject.subscribe(error => {
      this.getProductLinksErrorMsg = error;
    })
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe()
    this.getProductLinksErrorMsgSub.unsubscribe()
  }

  saveProductLinksToLocalStore(data: string) {
    localStorage.setItem('productsLink', JSON.stringify('/products/' + data));
  }
}
