import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styles: [
  ]
})
export class SellCarComponent implements OnInit {
  path;
  name: string;
  defaultUploadImg = '../assets/img/cell-car/upload-img.png';
  imgLocalPath = this.defaultUploadImg;

  constructor(private angularFireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  upload(event: any){
    this.path = event.target.files[0];  
    if (this.path) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imgLocalPath = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.name = this.path.name.substr(0, this.path.name.lastIndexOf('.'));
    } else {
      this.imgLocalPath = this.defaultUploadImg;
    }    
  }
  error = null;
  uploadImage(){
    this.angularFireStorage.upload("/cellCar/" + this.name + "-" + Math.random(), this.path)
    .then(() => {
      console.log('test')
    })
    .catch(error => {
      this.error = error.message
      
    });  
  }
}
