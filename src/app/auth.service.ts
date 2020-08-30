import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';

import { environment } from '../environments/environment';
import { User } from './user.model';

export interface AuthRess {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService{
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient){}

  signUp(email: string, password: string){
    return this.http.post<AuthRess>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.fireBaseAPIKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.errorHandler));
  }

  signIn(email: string, password: string){
    return this.http.post<AuthRess>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.fireBaseAPIKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.errorHandler),
      tap(ressData => {
        this.handleAuth(ressData.email, ressData.localId, ressData.idToken, +ressData.expiresIn)
      }));
  }

  logout(){
    this.user.next(null);
  }

  autoSignin(){ 
    const userData:{
      email: string,
      id: string,
      _tokenId: string,
      _tokenExpTime: string
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){     
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._tokenId,
      new Date(userData._tokenExpTime)
    )
    if(loadedUser.token){
      this.user.next(loadedUser);
    } 
  }

  private errorHandler(errorRess: HttpErrorResponse){
    let errorMsg = 'Unknown Error!';
    if (!errorRess.error || !errorRess.error.error){
     return throwError(errorMsg);
    } else{
      switch(errorRess.error.error.message){
        case 'EMAIL_EXISTS': errorMsg = 'Already has a registration with this email!';
         break;
        case 'EMAIL_NOT_FOUND': errorMsg = 'Wrong email or password!';
         break;
        case 'INVALID_PASSWORD': errorMsg = 'Wrong email or password!';
      }
      return throwError(errorMsg);
    }
  }

  private handleAuth(email:string, id: string, tokenId: string, tokenExpIn: number){
    const tokenExpTime = new Date(new Date().getTime() + tokenExpIn*1000);
    const user = new User(email, id, tokenId, tokenExpTime);
    this.user.next(user);    
    localStorage.setItem('userData', JSON.stringify(user));
  }
}