import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { AuthDataLogin } from './auth-data.model';
import { Router} from '@angular/router';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root'})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, public loginValidationBar: MatSnackBar) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(firstname: string, lastname: string, dateofbirth: Date, university: string, email: string, password: string) {
    const authData: AuthData = {first_name: firstname, last_name: lastname, dob: dateofbirth, university: university,
       email: email, password: password};
    console.log(authData);
    this.http.post('http://localhost:3000/api/user/signup', authData)
    .subscribe(response => {
      console.log(response);
    });
  }

  login(email: string, password: string) {
    const authDatalogin: AuthDataLogin = {email: email, password: password};
    this.http.post<{token: string, expiresIn: number }>('http://localhost:3000/api/user/login', authDatalogin)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      if (token) {
        const expiresInDuration = response.expiresIn;
        this.tokenTimer = setTimeout(() => {
          this.logout();
        }, expiresInDuration);
      this.authStatusListener.next(true);
      this.router.navigate(['/']);
      this.loginValidationBar.open('Hello. Welcome back', 'Cool', {
        duration: 3000,
      });
      } else {
        this.loginValidationBar.open('Username/Password is incorrect', 'Try Again', {
          duration: 3000,
        });
      }
     // console.log(response);
    });
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/']);
    this.loginValidationBar.open('Successfully logged out', 'Dismiss', {
      duration: 3000,
    });
  }
}
