import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { CarsForSell } from 'src/app/shared/models/car.model';
import { SubjectsService } from 'src/app/shared/services/subjects.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AdditionUserInfoService } from 'src/app/shared/services/user-additional-info.service';
import { UserAdditionalInfo } from 'src/app/shared/models/user.model';
import { GenerateIdService } from 'src/app/shared/services/generateId.service';

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
  isInEditMode: boolean = false;
  ownerEmail: string = null;
  carFile: any;
  carFiles: any;
  carImgLocalPath: string;
  carImgNames: any = [];
  carImgLocalPaths: any = [];
  carImgURLs: any = [];
  currentCarImages: any = [];
  uploadCarImagesToFirestoreError: string = null;
  updateSecondHandCarError: string = null;
  setcarImgURLsError: string = null;
  isLoading: boolean = false;
  deleteOldImgError: string = null;
  getCarImgURLError: string = null;
  uploadCarImgToFirestoreError: string = null;
  currentImageForDelete: any = [];

  constructor(
    private subjectService: SubjectsService,
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    private additionUserInfoService: AdditionUserInfoService,
    private angularFireStorage: AngularFireStorage,
    private generateIdService: GenerateIdService
  ) {}

  ngOnInit(): void {
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
      carImg: new FormControl(null),
      model: new FormControl(null),
      description: new FormControl(null, Validators.required),      
      price: new FormControl(null, Validators.required),
      carImgs: new FormControl(null)
    });

    this.currentCarImages = [...this.car.carImages];
    this.carImgLocalPath = this.car.carImg;
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
    if (!changeCarDetailsForm.valid) {
      return
    }

    this.isLoading = true;

    const id = this.car.id;
    let carImg = this.car.carImg;
    const doc = this.car.model;

    this.onUploadCarImageToFirestore(id).then(() => {
      if (changeCarDetailsForm.value.carImg) {
        carImg = changeCarDetailsForm.value.carImg;
      }
      if (this.currentImageForDelete.length > 0) {
        for (let i = 0; i < this.currentImageForDelete.length; i++) {
          this.firestore.delete(this.currentImageForDelete[i])
        }
        const currentImgs = this.currentCarImages;
        const newInfo = { doc, id, currentImgs }
        this.firestore.setSecondHanCurrentImages(newInfo);        
      }
      this.onUploadCarImagesToFirestore(id).then(() => {
        if (this.carImgNames.length > 0) {
          for (let i = 0; i < this.carImgNames.length; i++) {
            const img = changeCarDetailsForm.value.carImgs[i];
            const newImgInfo = { doc, id, img }
            this.firestore.updateSecondHanImagesCar(newImgInfo)
          }
        }
        const description = changeCarDetailsForm.value.description;
        const price = changeCarDetailsForm.value.price;      
        const newInfo = {carImg, description, price, id, doc};
        this.firestore.updateSecondHandCar(newInfo)
        .then(() => {
          this.isLoading = false;
          this.updateSecondHandCarError = null;
          this.onCancel();
        }, error => {
          this.updateSecondHandCarError = error.message;
        })
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
      this.carImgLocalPath = this.car.carImg;
    }  
  }

  onUploadCarImageToFirestore(id: string) {
    return new Promise((resolve) => {
      if (!this.carFile) {
        resolve();
      }
      this.angularFireStorage.upload(
        "/carsForSell/" + 
        this.changeCarDetailsForm.value.model + '/' +
        this.userAdditionalData[0].email + '/' + 
        id + '/' + 
        this.carFile.name, this.carFile)
      .then(uploadTask => {
        uploadTask.ref.getDownloadURL()
        .then(url => {
          this.changeCarDetailsForm.value.carImg = url;          
          this.firestore.delete(this.car.carImg)
          .then(() => {
            this.deleteOldImgError = null;
          })
          .catch(error => {
            this.deleteOldImgError = error.message;
          })
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
      })
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
        this.carImgNames.push(this.carFiles[i].name);
      }
    } else {
      this.carFiles = null;
      this.carImgLocalPaths = [];
      this.carImgNames = [];
      this.changeCarDetailsForm.controls['carImgs'].setValue('');
    }
  }

  onUploadCarImagesToFirestore(id: string) {
    return new Promise((resolve) => {
      if(this.carImgNames.length == 0) {
        resolve();
      }
      for (let i = 0; i < this.carImgNames.length; i++) {
        this.angularFireStorage.upload(
          "/carsForSell/" +
          this.changeCarDetailsForm.value.model + '/' +
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
              this.changeCarDetailsForm.value.carImgs = this.carImgURLs;
              this.setcarImgURLsError = null;
              resolve();
            }
          })
          .catch(error => {
            this.setcarImgURLsError = error.message;
          })
          this.uploadCarImagesToFirestoreError = null;
        })
        .catch(error => {
          this.uploadCarImagesToFirestoreError = error.message;
        });
      }      
    })
  }

  onEdit() {
    this.changeCarDetailsForm.controls['description'].setValue(this.car.description);
    this.changeCarDetailsForm.controls['price'].setValue(this.car.price);
    this.changeCarDetailsForm.controls['model'].setValue(this.car.model);
    this.isInEditMode = true;    
  }

  removeCarImg(index) {
    this.carImgLocalPaths.splice(index, 1);
    this.carImgNames.splice(index, 1);
    if(this.carImgLocalPaths == 0 && this.carImgNames == 0) {
      this.changeCarDetailsForm.value.carImgs = null;
    }
  }

  onCancel() {
    this.carFiles = null;
    this.carImgLocalPaths = [];
    this.carImgNames = [];
    this.changeCarDetailsForm.controls['carImgs'].setValue('');
    this.changeCarDetailsForm.controls['carImg'].setValue('');
    this.carImgLocalPath = this.car.carImg;
    this.currentCarImages = [...this.car.carImages];
    this.currentImageForDelete = [];    
    this.isInEditMode = false;    
  }

  deleteCurrentImages(index, url) {
    this.currentCarImages.splice(index, 1)
    this.currentImageForDelete.push(url)    
  }
}
