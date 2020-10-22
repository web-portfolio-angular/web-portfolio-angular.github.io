import { Pipe, PipeTransform } from '@angular/core';
import { FirestoreService } from '../shared/services/firestore.service';
import { UserAdditionalInfo } from '../shared/models/user-additional-info.model';

@Pipe({name: 'getImage'})
export class GetImagePipe implements PipeTransform {

  constructor(private firestore: FirestoreService){}
  
  transform(value: string){
    this.firestore.getRegistration(value).subscribe(ressData => {
      const userAdditionalData = ressData.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      console.log(userAdditionalData[0].userImg);
      return userAdditionalData[0].userImg;
    })    
  }
}