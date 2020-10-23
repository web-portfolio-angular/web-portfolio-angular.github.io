import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

import { FirestoreService } from '../shared/services/firestore.service';
import { UserAdditionalInfo } from '../shared/models/user-additional-info.model';

@Pipe({ name: 'getImage' })
export class GetImagePipe implements PipeTransform {

  constructor(private firestore: FirestoreService) { }

  transform(value: string, exponent: string) {
    return this.firestore.getRegistration(value).pipe(map(ressData => {
      const userAdditionalData = ressData.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      switch (exponent) {
        case 'name': return userAdditionalData[0].name;
        case 'phoneCode': return userAdditionalData[0].phoneCode;
        case 'phone': return userAdditionalData[0].phone;
        case 'userImg': return userAdditionalData[0].userImg;
      }
    }))
  }
}