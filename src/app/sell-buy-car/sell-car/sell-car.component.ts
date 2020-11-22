import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';

import { CarManufactureYear, ProductLink } from '../../shared/models/car.model';
import { UserAdditionalInfo } from '../../shared/models/user.model';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AdditionUserInfoService } from '../../shared/services/user-additional-info.service';
import { GenerateIdService } from '../../shared/services/generateId.service';

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
  carImgURL: string;
  carFiles: any;  
  carImgNames: any = [];
  carImgLocalPaths: any = [];
  carImgURLs: any = [];
  carModels: ProductLink[] = [];
  carManufactureYears: CarManufactureYear[] = [];
  userAdditionalData: UserAdditionalInfo[];
  getCarModelsError: string = null;
  getCarManufactureYearError: string = null;
  sellCarError: string = null;
  uploadCarImgToFirestoreError: string = null;
  uploadCarImagesToFirestoreError: string = null;
  getCarImgURLError: string = null;
  getcarImgURLsError: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    private additionUserInfoService: AdditionUserInfoService,
    private angularFireStorage: AngularFireStorage,
    private generateIdService: GenerateIdService
  ) { }

  ngOnInit(): void {
    this.sellCarForm = this.formBuilder.group({
      model: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
      carImg: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      carImgs: new FormControl(null)
    });

    this.firestore.getSecondHandCarsLink().subscribe(data => {
      this.carModels = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as ProductLink
        }
      })
      this.getCarModelsError = null
    }, error => {
      this.getCarModelsError = error.message;
    });

    this.firestore.getCarManufactureYear().subscribe(data => {
      this.carManufactureYears = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as CarManufactureYear
        }
      })
      this.getCarManufactureYearError = null;      
    }, error => {
      this.getCarManufactureYearError = error.message;     
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
    if (!sellCarForm.valid) {
      return
    }

    const id = this.generateIdService.generateId();

    this.onUploadCarImgToFirestore(id).then(() => {
      this.onUploadCarImagesToFirestore(id).then(() => {
        const model = sellCarForm.value.model;
        const year = sellCarForm.value.year;
        const carImg = sellCarForm.value.carImg;
        const description = sellCarForm.value.description.trim();
        const price = sellCarForm.value.price;
        const owner = this.userAdditionalData[0].email;
        const date = firebase.firestore.Timestamp.now();
        const carImages = sellCarForm.value.carImgs;
        const car = { model, year, carImg, description, price, owner, id, date, carImages };
        this.firestore.setSecondHandCar(car)
        .then(() => {
          this.sellCarForm.reset();
          this.carImgNames = [];
          this.carImgLocalPaths = [];
          this.carImgURLs = [];
          this.carImgLocalPath = this.carDefaultImg;
          this.sellCarError = null;
        })
        .catch(error => {
          this.sellCarError = error.message;
        });
      })
    })
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

  onUploadCarImgToFirestore(id) {
    return new Promise((resolve) => {
      this.angularFireStorage.upload(
        "/carsForSell/" + 
        this.sellCarForm.value.model + '/' +
        this.userAdditionalData[0].email + '/' + 
        id + '/' + 
        this.carImgName + "-" + 
        this.generateIdService.generateId(), this.carFile)
      .then(uploadTask => {
        uploadTask.ref.getDownloadURL()
        .then(url => {
          this.sellCarForm.value.carImg = url;
          this.getCarImgURLError = null;          
          resolve();
        })
        .catch( error => {
          this.getCarImgURLError = error; 
        })
        this.uploadCarImgToFirestoreError = null;
      })
      .catch(error => {
        this.uploadCarImgToFirestoreError = error.message;
      });
    })
  }

  onChooseCarImgs(event) {
    this.carFiles = event.target.files;    
    if(this.carFiles.length > 0) {
      for (let i = 0; i < this.carFiles.length; i++){
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.carImgLocalPaths.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
        this.carImgNames.push(this.carFiles[i].name.substr(0, this.carFiles[i].name.lastIndexOf('.')));
      }
    } else {
      this.carFiles = null;
      this.carImgLocalPaths = [];
      this.carImgNames = [];
    }
  }

  onUploadCarImagesToFirestore(id) {
    return new Promise((resolve) => {
      if(this.carImgNames.length == 0) {
        resolve();
      }
      for (let i = 0; i < this.carImgNames.length; i++) {
        this.angularFireStorage.upload(
          "/carsForSell/" +
          this.sellCarForm.value.model + '/' +
          this.userAdditionalData[0].email + '/' + 
          id + '/' +
          "/carImages/" +
          this.carImgNames[i] + "-" + 
          this.generateIdService.generateId(), this.carFiles[i])
        .then(uploadTask => {
          uploadTask.ref.getDownloadURL()
          .then(url => {
            this.carImgURLs.push(url);            
            if (this.carImgURLs.length == this.carImgNames.length) {
              this.sellCarForm.value.carImgs = this.carImgURLs;
              this.getcarImgURLsError = null;
              resolve();
            }
          })
          .catch(error => {
            this.getcarImgURLsError = error.message;
          })
          this.uploadCarImagesToFirestoreError = null;
        })
        .catch(error => {
          this.uploadCarImagesToFirestoreError = error.message;
        });
      }      
    })
  }

  removeCarImg(index) {
    this.carImgLocalPaths.splice(index, 1);
    this.carImgNames.splice(index, 1);
    if(this.carImgLocalPaths == 0 && this.carImgNames == 0) {
      this.sellCarForm.value.carImgs = null;
    }
  }
}
