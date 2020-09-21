export class Comment{
  constructor(
    public name: string,
    public date: string,
    public comment: string,
    public replies?: Comment [],
    public id?: string
  ){}
}