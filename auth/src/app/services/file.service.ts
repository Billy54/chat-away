import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class FileService extends DataService {
  constructor(http: HttpClient, er: ErrorHandlerService) {
    super(http, er, 'http://localhost:5000/');
  }
}
