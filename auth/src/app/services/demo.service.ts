import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class DemoService extends DataService {
  constructor(http: HttpClient, er: ErrorHandlerService) {
    super(http, er, 'https://chat-app-ang.herokuapp.com/');
  }
}
