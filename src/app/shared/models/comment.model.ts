export class Comment{
  constructor(
    public name: string,
    public date: Date,
    public comment: string,
    public id?: string
  ){}
}