import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styles: [
  ]
})
export class SellCarComponent implements OnInit {
  imgPath;
  imgName: string;
  defaultUploadImg = '../assets/img/cell-car/upload-img.png';
  imgLocalPath = this.defaultUploadImg;
  errorMsgOnUpload = null;

  task: AngularFireUploadTask;
  imgURL;

  constructor(private angularFireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  uploadImg(event: any){
    this.imgPath = event.target.files[0];  
    if (this.imgPath) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
          this.imgLocalPath = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.imgName = this.imgPath.name.substr(0, this.imgPath.name.lastIndexOf('.'));
    } else {
      this.imgLocalPath = this.defaultUploadImg;
    }     
  }

  uploadImgToFirestorage(){
    this.angularFireStorage.upload("/cellCar/" + this.imgName + "-" + Math.random(), this.imgPath)
    .then(() => {
      this.errorMsgOnUpload = null;    
    })
    .catch(error => {
      this.errorMsgOnUpload = error.message      
    });    
  }
}
