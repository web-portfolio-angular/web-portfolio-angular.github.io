import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styles: [
  ]
})
export class SellCarComponent implements OnInit {
  file: any;
  imgName: string;
  defaultUploadImg: string = '../assets/img/cell-car/upload-img.png';
  imgLocalPath: string = this.defaultUploadImg;
  imgURL: string = null;
  errorMsgOnUpload: string = null;  

  constructor(private angularFireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  uploadImg(event: any){
    this.file = event.target.files[0];  
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgLocalPath = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.imgName = this.file.name.substr(0, this.file.name.lastIndexOf('.'));
    } else {
      this.imgLocalPath = this.defaultUploadImg;
    }    
  }

  uploadImgToFirestorage(){
    this.angularFireStorage.upload("/cellCar/" + this.imgName + "-" + Math.random().toString(36).substring(2), this.file)
    .then(uploadTask => {
      uploadTask.ref.getDownloadURL().then(url => {
        this.imgURL = url;
      })      
      this.errorMsgOnUpload = null;    
    })
    .catch(error => {
      this.errorMsgOnUpload = error.message      
    });    
  }
}
