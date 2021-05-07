import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponseModel} from '../models/resonse.models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.BASE_URL;
  }
  getProductsForAdmin(url: string): Observable<IResponseModel[]> {
    return this.http.get<IResponseModel[]>(this.baseUrl + url);
  }
}
