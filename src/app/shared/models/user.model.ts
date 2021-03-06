export class User{
  constructor(
    public email: string, 
    public id: string, 
    private _tokenId: string, 
    private _tokenExpTime: Date
  ){}

  get token(){
    if (!this._tokenExpTime || new Date() > this._tokenExpTime){
      return null;
    } else{
      return this._tokenId
    }
  }
}

export class UserAdditionalInfo {
  name: string;
  phoneCode: number;
  phone: number;
  email: string;
  userImg: string;
  id?: string;
}