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
  @Input() carLinks;
  private isLoadingSub: Subscription;
  private getCarLinksErrorMsgSub: Subscription;
  isLoading: boolean;
  getCarLinksErrorMsg: string;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.isLoadingSub = this.subjectsService.isLoadingSubject.subscribe(boolean => {
      this.isLoading = boolean;
    })
    this.getCarLinksErrorMsgSub = this.subjectsService.getCarLinksErrorMsgSubject.subscribe(error => {
      this.getCarLinksErrorMsg = error;
    })
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe()
    this.getCarLinksErrorMsgSub.unsubscribe()
  }

  saveProductLinksToLocalStore(data: string) {
    localStorage.setItem('productsLink', JSON.stringify('/products/' + data));
  }
}
