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
  @Input() currentLink;
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

  saveLastVisitedLinkToLocalStore(link: string) {
    localStorage.setItem(this.currentLink + '-LastVisitedLink', JSON.stringify('/' + this.currentLink + '/' + link));
  }
}
