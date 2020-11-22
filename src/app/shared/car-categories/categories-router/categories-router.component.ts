import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-categories-router',
  templateUrl: './categories-router.component.html',
  styles: []
})
export class CategoriesRouterComponent implements OnInit, OnDestroy {
  @Input() carLinks;
  @Input() currentLink;
  private isLoadingSub: Subscription;
  isLoading: boolean;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.isLoadingSub = this.subjectsService.isLoadingSubject.subscribe(boolean => {
      this.isLoading = boolean;
    })
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
  }

  saveLastVisitedLinkToLocalStore(link: string) {
    localStorage.setItem(this.currentLink + '-LastVisitedLink', JSON.stringify('/' + this.currentLink + '/' + link));
  }
}
