import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { catchError } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient;
  private errorHandler: ErrorHandlerService;
  private readonly URL = 'http://localhost:5000/';
  private options: any;
  private jwtHelper: any;

  constructor(http: HttpClient, er: ErrorHandlerService) {
    this.http = http;
    this.errorHandler = er;
    this.jwtHelper = new JwtHelperService();

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.options = { headers: headers, withCredentials: true };
  }

  //main authentication routine
  public isAuthenticated(): Boolean {
    let token = localStorage.getItem('token') as string;
    if (!token) {
      return false;
    }
    if (this.jwtHelper.isTokenExpired(token)) {
      return false;
    } else {
      return true;
    }
  }

  //get info from token
  public getUserInfo() {
    let token = localStorage.getItem('token') as string;
    let dec: any = jwt_decode(token);
    return { name: dec.name, email: dec.email, id: dec.id };
  }

  //store user info into the local storage
  public setUserInfo(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  //remove user on logout
  public removeUserInfo() {
    localStorage.clear();
  }

  //call the server to validate
  public validate(
    email: String,
    password: String,
    uri: String
  ): Observable<any> {
    return this.http.post(
      this.URL + uri,
      { email: email, password: password },
      this.options
    );
  }

  //logout
  public logout(uri: String): Observable<any> {
    if (this.isAuthenticated()) {
      this.removeUserInfo();
      return this.http
        .get(this.URL + uri, this.options)
        .pipe(catchError(this.errorHandler.handleError));
    }
    return throwError('Something bad happened; please try again later.');
  }

  //register
  public register(
    name: String,
    email: String,
    password: String,
    uri: String
  ): Observable<any> {
    return this.http
      .post(
        this.URL + uri,
        { name: name, email: email, password: password },
        this.options
      )
      .pipe(catchError(this.errorHandler.handleError));
  }
}
