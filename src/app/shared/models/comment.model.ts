export class Comment{
  constructor(
    public name: string,
    public date: firebase.firestore.Timestamp,
    public comment: string,
    public replies?: Comment [],
    public id?: string
  ){}
}