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
  editProd(url: string, body: any): Observable<any>{
    return this.http.post(this.baseUrl + url, body);
  }
  addProd(url: string, body: any): Observable<any>{
    console.log(body);
    return this.http.post(this.baseUrl + url, body);
  }
  delProducts(url: string, id: any): Observable<any> {
    console.log('ss');
    return this.http.post<any>(this.baseUrl + url , {del: id});
  }
  getUserData(url: string): Observable<any>{
  return this.http.get<any>(this.baseUrl + url);
  }
  updateCart(url: string, body: any): Observable<any>{
    return this.http.post(this.baseUrl + url, body);
  }
  deleteCart(url: string, body: any): Observable<any>{
    return this.http.post(this.baseUrl + url, body);
  }
}
