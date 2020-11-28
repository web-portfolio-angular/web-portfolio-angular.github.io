import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
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
  userAdditionalData: UserAdditionalInfo[];
  sellCarForm: FormGroup;
  carFile: any;  
  carDefaultImg: string = '../../../assets/img/cell-buy-car/upload-img.png';
  carImgLocalPath: string = this.carDefaultImg;
  carImgURL: string;
  carFiles: any = [];  
  carImgNames: any = [];
  carImgLocalPaths: any = [];
  carImgURLs: any = [];
  carModels: ProductLink[] = [];
  carManufactureYears: CarManufactureYear[] = [];
  getCarModelsError: string = null;
  getCarManufactureYearError: string = null;
  sellCarError: string = null;
  uploadCarImgToFirestoreError: string = null;
  uploadCarImagesToFirestoreError: string = null;
  getCarImgURLError: string = null;
  getcarImgURLsError: string = null;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    private additionUserInfoService: AdditionUserInfoService,
    private angularFireStorage: AngularFireStorage,
    private generateIdService: GenerateIdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userAdditionalInfoSub = this.additionUserInfoService.userAdditionalDataSubject.subscribe(userData => {
      this.userAdditionalData = userData;
    })

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
  }

  ngOnDestroy() {
    this.userAdditionalInfoSub.unsubscribe();
  }

  onSubmit(sellCarForm) {
    if (!sellCarForm.valid) {
      return
    }

    this.isLoading = true;
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
          this.isLoading = false;
          this.sellCarForm.reset();
          localStorage.setItem('sell-buy-car/buy-LastVisitedLink', JSON.stringify('/sell-buy-car/buy/' + model.toLowerCase()));
          this.router.navigate(['/sell-buy-car/buy/' + model.toLowerCase()]);
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
        this.carFile.name, this.carFile)
      .then(uploadTask => {
        uploadTask.ref.getDownloadURL()
        .then(url => {
          this.sellCarForm.value.carImg = url;
          this.getCarImgURLError = null;          
          resolve();
        })
        .catch( error => {
          this.getCarImgURLError = error.message; 
        })
        this.uploadCarImgToFirestoreError = null;
      })
      .catch(error => {
        this.uploadCarImgToFirestoreError = error.message;
      });
    })
  }

  onChooseCarImgs(event) {
    for (let i = 0; i < event.target.files.length; i++){
      this.carFiles.push(event.target.files[i]);
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.carImgLocalPaths.push(event.target.result);
      }
      reader.readAsDataURL(event.target.files[i]);
      this.carImgNames.push(this.carFiles[i].name);
    } 
  }

  onUploadCarImagesToFirestore(id) {
    return new Promise((resolve) => {
      if(this.carImgNames.length == 0) {
        this.sellCarForm.value.carImgs = this.carImgURLs;
        resolve();
      }
      for (let i = 0; i < this.carImgNames.length; i++) {
        this.angularFireStorage.upload(
          "/carsForSell/" +
          this.sellCarForm.value.model + '/' +
          this.userAdditionalData[0].email + '/' + 
          id + '/' +
          "/carImages/" +
          this.generateIdService.generateId() +
          "-" + this.carImgNames[i], this.carFiles[i])
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
    this.carFiles.splice(index, 1);
    if(this.carFiles == 0) {
      this.sellCarForm.value.carImgs = null;
    }
  }
}
