import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Car } from 'src/app/shared/models/car.model';
import { SubjectsService } from 'src/app/shared/services/subjects.service';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styles: []
})
export class CarItemComponent implements OnInit, OnDestroy {
  @Input() car: Car;
  private carShowImagesSub: Subscription;
  private carIdSub: Subscription;  
  carCurrentImage: string;
  carShowImages: boolean;
  carId: string;

  constructor(
    private subjectService: SubjectsService
  ) {}

  ngOnInit(): void {
    this.carShowImagesSub = this.subjectService.carShowImagesSubject.subscribe(boolean => {
      this.carShowImages = boolean;
    });
    this.carIdSub = this.subjectService.carIdSubject.subscribe(string => {
      this.carId = string;
    });
  }

  ngOnDestroy(): void {
    this.carShowImagesSub.unsubscribe();    
    this.carIdSub.unsubscribe();    
  }

  onShowCarImages(carId) {
    this.subjectService.onShowCarImages(carId);
  }
}
