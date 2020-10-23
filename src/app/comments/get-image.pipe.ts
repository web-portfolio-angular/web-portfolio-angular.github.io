import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

import { FirestoreService } from '../shared/services/firestore.service';
import { UserAdditionalInfo } from '../shared/models/user-additional-info.model';

@Pipe({ name: 'getImage' })
export class GetImagePipe implements PipeTransform {

  constructor(private firestore: FirestoreService) { }

  transform(value: string) {
    return this.firestore.getRegistration(value).pipe(map(ressData => {
      const userAdditionalData = ressData.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as UserAdditionalInfo
        }
      })
      return userAdditionalData[0].userImg;
    }))
  }
}