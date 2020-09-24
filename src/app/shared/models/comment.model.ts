// import { Timestamp } from 'rxjs/internal/operators/timestamp';
// import * as firebase from 'firebase/app';

export class Comment{
  constructor(
    public name: string,
    public date: any,
    public comment: string,
    public replies?: Comment [],
    public id?: string
  ){}
}