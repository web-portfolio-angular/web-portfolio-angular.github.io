import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubjectsService } from 'src/app/shared/services/subjects.service';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: []
})
export class CarImagesComponent implements OnInit {
  @Input() carImgs;
  private carShowImagesSub: Subscription;
  private carIdSub: Subscription;
  carShowImages: boolean;
  carId: string;
  currentImgUrl: string;
  currentImgIndex: number = 0;

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

    this.currentImgUrl = this.carImgs[0];
  }

  ngOnDestroy(): void {
    this.carShowImagesSub.unsubscribe();    
    this.carIdSub.unsubscribe();   
  }

  onHideCarImages() {
    this.subjectService.onHideCarImages();
  }

  changeImg(imgUrl: string, index: number) {
    this.currentImgUrl = imgUrl;
    this.currentImgIndex= index;
  }
}