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

    const id = this.generateIdService.generateId();

    let asd = false;
    let img;

    this.angularFireStorage.upload(
      "/sellBuyCar/" + 
      this.userAdditionalData[0].email + '/' + 
      id + '/' + 
      this.carImgName + "-" + 
      this.generateIdService.generateId(), this.carFile)
    .then(uploadTask => {
      uploadTask.ref.getDownloadURL()
      .then(url => {
        const model = this.sellCarForm.value.model;
        const year = this.sellCarForm.value.year;
        const carImg = url;
        const description = this.sellCarForm.value.description.trim();
        const price = this.sellCarForm.value.price;
        const userEmail = this.userAdditionalData[0].email;
        const carImages = ['link1', 'link2'];
        const car = { model, year, carImg, description, price, userEmail, id, carImages };
        
        this.firestore.sellBuyCar(car);

        asd = true;
        img = url;
      })
      // this.errorMsgOnAvatarUpload = null;
      // this.isLoading = false;
      // this.file = undefined;
    })
    .catch(error => {
      // this.errorMsgOnAvatarUpload = error.message;
      // this.isLoading = false;  
    });


    if (asd) {
      console.log(img);
      
    }


    
    //upload img
    

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
    this.angularFireStorage.upload(
      "/sellBuyCar/" + 
      this.userAdditionalData[0].email + '/' + 
      this.carImgName + "-" + 
      this.generateIdService.generateId(), this.carFile)
    .then(uploadTask => {
      uploadTask.ref.getDownloadURL()
      .then(url => {
        return url;
           
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
}
