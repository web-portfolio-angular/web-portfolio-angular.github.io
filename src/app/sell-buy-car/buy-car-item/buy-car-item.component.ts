import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CarManufactureYear, CarModel, CarsForSell } from 'src/app/shared/models/car.model';
import { SubjectsService } from 'src/app/shared/services/subjects.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AdditionUserInfoService } from 'src/app/shared/services/user-additional-info.service';
import { UserAdditionalInfo } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-buy-car-item',
  templateUrl: './buy-car-item.component.html',
  styles: [
  ]
})
export class BuyCarItemComponent implements OnInit {
  @Input() car: CarsForSell;
  private carShowImagesSub: Subscription;
  private carIdSub: Subscription;
  private userAdditionalInfoSub: Subscription;
  userAdditionalData: UserAdditionalInfo[];
  carCurrentImage: string;
  carShowImages: boolean;
  carId: string;
  changeCarDetailsForm: FormGroup;
  carModels: CarModel[] = [];
  carManufactureYears: CarManufactureYear[] = [];
  getCarModelsError: string = null;
  getCarManufactureYearError: string = null;
  isInEditMode: boolean = false;
  ownerEmail: string = null;
  carFiles: any;
  carImgNames: any = [];
  carImgLocalPaths: any = [];
  carImgURLs: any = [];

  constructor(
    private subjectService: SubjectsService,
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    private additionUserInfoService: AdditionUserInfoService,
  ) {}

  ngOnInit(): void {
    this.additionUserInfoService.getUserAdditionalData();
    this.userAdditionalInfoSub = this.additionUserInfoService.userAdditionalDataSubject.subscribe(userData => {
      this.userAdditionalData = userData;
      this.ownerEmail = this.userAdditionalData[0].email;
    })

    this.carShowImagesSub = this.subjectService.carShowImagesSubject.subscribe(boolean => {
      this.carShowImages = boolean;
    });
    this.carIdSub = this.subjectService.carIdSubject.subscribe(string => {
      this.carId = string;
    });

    this.changeCarDetailsForm = this.formBuilder.group({
      model: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      carImgs: new FormControl(null)
    });

    this.firestore.getCarModels().subscribe(data => {
      this.carModels = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as CarModel
        }
      })      
      // this.getCarModelsError = null
    }, error => {
      // this.getCarModelsError = error.message;
    });

    this.firestore.getCarManufactureYear().subscribe(data => {
      this.carManufactureYears = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as CarManufactureYear
        }
      })
      // this.getCarManufactureYearError = null;
    }, error => {
      // // this.getCarManufactureYearError = error.message;
    });

    this.carImgLocalPaths = this.car.carImages;
  }

  ngOnDestroy(): void {
    this.carShowImagesSub.unsubscribe();    
    this.carIdSub.unsubscribe();
    this.userAdditionalInfoSub.unsubscribe();
  }

  onShowCarImages(carId) {
    this.subjectService.onShowCarImages(carId);
  }

  submitCarDetailChanges(changeCarDetailsForm) {
    const model = changeCarDetailsForm.value.model;
    const year = changeCarDetailsForm.value.year;
    const description = changeCarDetailsForm.value.description;
    const price = changeCarDetailsForm.value.price;
    const id = this.car.id;    
    const newInfo = {model, year, description, price, id};
    this.firestore.updateSecondHandAudi(newInfo)
    .then(() => {

    }, error => {
      
    });
  }

  onChooseCarImgs(event) {
    this.carFiles = event.target.files;
    if (this.carFiles) {
      for (let i = 0; i < this.carFiles.length; i++){
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.carImgLocalPaths.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
        this.carImgNames.push(this.carFiles[i].name.substr(0, this.carFiles[i].name.lastIndexOf('.')));
      }
    }
  }

  removeCarImg(index) {
    this.carImgLocalPaths.splice(index, 1);
    this.carImgNames.splice(index, 1);
    if(this.carImgLocalPaths == 0 && this.carImgNames == 0) {
      this.changeCarDetailsForm.value.carImgs = null;
    }
  }

  onEdit() {
    this.changeCarDetailsForm.controls['model'].setValue(this.car.model);
    this.changeCarDetailsForm.controls['year'].setValue(this.car.year);
    this.changeCarDetailsForm.controls['description'].setValue(this.car.description);
    this.changeCarDetailsForm.controls['price'].setValue(this.car.price);
    this.isInEditMode = true;
  }

  onCancel() {
    this.isInEditMode = false;
    this.carImgLocalPaths = this.car.carImages;
    console.log(this.car.carImages);
    
  }
}
