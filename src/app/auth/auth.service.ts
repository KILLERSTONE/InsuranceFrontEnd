import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../shared/types';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiPath='https://localhost:7293/api';
  constructor(private httpClient:HttpClient) { }

  isAuthenticated:boolean=false;

  loginUser(form: LoginForm) {
    const { username, password } = form;
    const url = `${this.apiPath}/login`;
    return this.httpClient.post<any>(url, { username, password }).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  setLoggedIn(userid:string){
    sessionStorage.setItem('authenticated','true');
    sessionStorage.setItem('userid',userid);
  }

  getUserId(){
    return sessionStorage.getItem('userid');
  }
  isLoggedIn(){
    return sessionStorage.getItem('authenticated')==='true';
  }

  logout(){
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('userid');
  }
}
