import { Component, OnInit } from '@angular/core';
import {HttpService} from '../core/http.service';
import {IResponseModel} from '../models/resonse.models';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: IResponseModel[] = [];
  cart: IResponseModel[] = [];
  total = 0;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getProductsForAdmin('/prods').subscribe(prods => {
      this.data = prods;
    });
    this.httpService.getUserData('/users/single/cart/5ee0e7e0c3f8168aa74f491c').subscribe(data =>
    {this.cart = data;
     this.cart.forEach(item1 => {
        this.total += item1.price;
      });
    });
  }
  addToCart(item: any): void{
    this.httpService.updateCart('/users/cartUpdate/5ee0e7e0c3f8168aa74f491c', item).subscribe((data) => {
      this.httpService.getUserData('/users/single/cart/5ee0e7e0c3f8168aa74f491c').subscribe(cart => {
        console.log(data);
        this.cart = cart;
        this.cart.forEach(item1 => {
          this.total += item1.price;
        });
      });
    });
  }
  payCart(): void{
    this.httpService.deleteCart('/users/cartDelete/5ee0e7e0c3f8168aa74f491c', []).subscribe(data =>
      {
       this.cart = [];
       this.total = 0;
      }
    , () => console.error('error'));
  }
}
