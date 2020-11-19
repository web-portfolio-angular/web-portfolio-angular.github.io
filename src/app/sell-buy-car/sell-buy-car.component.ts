import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-buy-car',
  templateUrl: './sell-buy-car.component.html',
  styles: [
  ]
})
export class SellBuyCarComponent implements OnInit {
  file: any;
  imgName: string;
  defaultUploadImg: string = '../assets/img/cell-car/upload-img.png';
  imgLocalPath: string = this.defaultUploadImg;
  imgURL: string = null;
  errorMsgOnUpload: string = null;  

  constructor(
    private angularFireStorage: AngularFireStorage,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const lastVisitedLink: {
      lastVisitedLink: string
    } = JSON.parse(localStorage.getItem('sell-buy-car-LastVisitedLink'));

    if (lastVisitedLink) {
      this.router.navigate([lastVisitedLink]);
    }    
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

  saveLastVisitedLinkToLocalStore(link: string) {
    localStorage.setItem('sell-buy-car-LastVisitedLink', JSON.stringify('/sell-buy-car/' + link));
  }
}
