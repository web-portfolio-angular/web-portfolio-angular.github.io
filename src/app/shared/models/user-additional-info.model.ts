export class UserAdditionalInfo {
  constructor (
    public name: string, 
    public phoneCode: number,
    public phone: number, 
    public email: string,
    public userImg: string,
    public id?: string
  ){}
}