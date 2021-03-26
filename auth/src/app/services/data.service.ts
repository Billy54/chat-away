import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly url: string;
  private http: HttpClient;
  private errorHandler: ErrorHandlerService;
  private options: any;

  constructor(
    http: HttpClient,
    er: ErrorHandlerService,
    @Inject(String) url: string
  ) {
    this.http = http;
    this.errorHandler = er;
    this.url = url;

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.options = { headers: headers, withCredentials: true };
  }

  //get all
  getAll(uri: string): Observable<any> {
    return this.http
      .get(this.url + uri, this.options)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getLastComment(uri: string): Observable<any> {
    return this.http
      .get(this.url + uri, this.options)
      .pipe(catchError(this.errorHandler.handleError));
  }

  getComments(uri: string, roomData: any): Observable<any> {
    return this.http
      .post(this.url + uri, roomData, this.options)
      .pipe(catchError(this.errorHandler.handleError));
  }

  //get spesific user
  getUser(uri: string): Observable<any> {
    return this.http
      .get(this.url + uri, this.options)
      .pipe(catchError(this.errorHandler.handleError));
  }

  //post avatar
  postAvatar(uri: string, file: any): Observable<any> {
    return this.http
      .post(this.url + uri, file, this.options)
      .pipe(catchError(this.errorHandler.handleError));
  }

  //get avatar
  getAvatar(uri: string): Observable<any> {
    return this.http
      .get(this.url + uri, this.options)
      .pipe(catchError(this.errorHandler.handleError));
  }
}
