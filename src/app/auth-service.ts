import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environments/environment';

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
    }).pipe(catchError(this.errorHandler));
  }

  errorHandler(errorRess: HttpErrorResponse){
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
}