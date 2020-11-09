import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CarModel } from '../../shared/models/car-model.model';
import { CarManufactureYear } from '../../shared/models/car-manufacture-year.model';
import { UserAdditionalInfo } from '../../shared/models/user-additional-info.model';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AdditionUserInfoService } from '../../shared/services/user-additional-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styles: []
})
export class SellCarComponent implements OnInit, OnDestroy {
  private userAdditionalInfoSub: Subscription;
  sellCarForm: FormGroup;
  carFile: any;
  carDefaultImg: string = '../../../assets/img/cell-car/upload-img.png';
  carImgLocalPath: string = this.carDefaultImg;
  carImgName: string;
  carModels: CarModel[] = [];
  carManufactureYears: CarManufactureYear[] = [];
  userAdditionalData: UserAdditionalInfo[];

  constructor(
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    private additionUserInfoService: AdditionUserInfoService,
  ) { }

  ngOnInit(): void {
    this.sellCarForm = this.formBuilder.group({
      model: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      carImg: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });

    this.firestore.getCarModels().subscribe(data => {
      this.carModels = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as CarModel
        }
      })
      
    }, error => {
      
    });

    this.firestore.getCarManufactureYear().subscribe(data => {
      this.carManufactureYears = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as CarManufactureYear
        }
      })
      
      
    }, error => {
      
    });

    this.additionUserInfoService.getUserAdditionalData();
    this.userAdditionalInfoSub = this.additionUserInfoService.userAdditionalDataSubject.subscribe(userData => {
      this.userAdditionalData = userData;

      if(!this.userAdditionalData) {
        return
      }
    })
  }

  ngOnDestroy() {
    this.userAdditionalInfoSub.unsubscribe()
  }

  onSubmit(sellCarForm) {
    if (!this.sellCarForm.valid) {
      return
    }

    //upload img
    console.log(sellCarForm);
  }

  onChooseCarImg(event) {
    this.carFile = event.target.files[0];
    if (this.carFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.carImgLocalPath = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.carImgName = this.carFile.name.substr(0, this.carFile.name.lastIndexOf('.'));
    } else {
      this.carImgLocalPath = this.carDefaultImg;
    }     
  }

  onUploadCarImgToFirestore() {
    console.log(this.carImgName);
  }
}
