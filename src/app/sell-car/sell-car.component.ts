import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styles: [
  ]
})
export class SellCarComponent implements OnInit {
  path: string;
  name: string;

  constructor(private angularFireStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  upload(event){

    this.path = event.target.files[0];
    this.name = event.target.files[0].name.substr(0, event.target.files[0].name.lastIndexOf('.'));
    if (this.name == undefined){
      console.log('no image');
      
    }
  }

  uploadImage(){
    this.angularFireStorage.upload("/files/cellCar/" + this.name + Math.random(), this.path);    
  }
}
