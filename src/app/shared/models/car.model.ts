export class Car{
  constructor (
    public carImg: string, 
    public carHoverImg: string,
    public carInfo: string,
    public carPrice: number,
    public dateCreation: firebase.firestore.Timestamp,
    public carImgs?: any,
    public id?: string
  ){}
}