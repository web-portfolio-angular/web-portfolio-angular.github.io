import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscription } from 'rxjs';

import { CarModel } from '../../shared/models/car-model.model';
import { CarManufactureYear } from '../../shared/models/car-manufacture-year.model';
import { UserAdditionalInfo } from '../../shared/models/user-additional-info.model';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AdditionUserInfoService } from '../../shared/services/user-additional-info.service';
import { GenerateIdService } from '../../shared/services/generateId.service';
import { SellBuyCar } from 'src/app/shared/models/sell-buy-car.model';

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
  carModels: CarModel[] = [];
  carManufactureYears: CarManufactureYear[] = [];
  userAdditionalData: UserAdditionalInfo[];

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
    if (!sellCarForm.valid) {
      return
    }

    const id = this.generateIdService.generateId();

    this.onUploadCarImgToFirestore(id).then(() => {
      this.onUploadCarImagesToFirestore(id).then(() => {
        const model = sellCarForm.value.model;
        const year = sellCarForm.value.year;
        const carImg = this.sellCarForm.value.carImg;
        const description = sellCarForm.value.description.trim();
        const price = sellCarForm.value.price;
        const userEmail = this.userAdditionalData[0].email;
        const carImages = this.sellCarForm.value.carImgs;
        const car = { model, year, carImg, description, price, userEmail, id, carImages };
        
        // console.log(car);      
      this.firestore.sellBuyCar(car);
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
    } else {
      // this.carImgLocalPaths = [];
      // console.log('else: ' + this.carImgLocalPaths);
      // console.log('else'); 
    }
  }

  onUploadCarImgToFirestore(id) {
    return new Promise((resolve) => {
      this.angularFireStorage.upload(
        "/sellBuyCar/" + 
        this.userAdditionalData[0].email + '/' + 
        id + '/' + 
        this.carImgName + "-" + 
        this.generateIdService.generateId(), this.carFile)
      .then(uploadTask => {
        uploadTask.ref.getDownloadURL()
        .then(url => {
          this.sellCarForm.value.carImg = url;
          resolve();
        })      
        // this.errorMsgOnAvatarUpload = null;
        // this.isLoading = false;
        // this.file = undefined;        
      })
      .catch(error => {
        // this.errorMsgOnAvatarUpload = error.message;
        // this.isLoading = false;
      });
    })
  }

  onUploadCarImagesToFirestore(id) {
    return new Promise((resolve) => {
      for (let i = 0; i < this.carImgNames.length; i++) {
        this.angularFireStorage.upload(
          "/sellBuyCar/" + 
          this.userAdditionalData[0].email + '/' + 
          id + '/' +
          "/carImages/" +
          this.carImgNames[i] + "-" + 
          this.generateIdService.generateId(), this.carFile)
        .then(uploadTask => {
          uploadTask.ref.getDownloadURL()
          .then(url => {
            this.carImgURLs.push(url);
            this.sellCarForm.value.carImgs = this.carImgURLs;
            console.log( this.carImgURLs);          
            console.log( this.sellCarForm.value.carImgs);
            // resolve();        
          })      
          // this.errorMsgOnAvatarUpload = null;
          // this.isLoading = false;
          // this.file = undefined;        
        })
        .catch(error => {
          // this.errorMsgOnAvatarUpload = error.message;
          // this.isLoading = false;
        });
      }      
    })
  }
}
