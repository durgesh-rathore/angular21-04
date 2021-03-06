import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 placeOrderUrl="https://angularapi-api.herokuapp.com/api/order/orderplace"
  constructor(private http:HttpClient) { }
  placeOrder( address:any,city:string,mobile:string, uId:any,productId:any):Observable<any>{
    return this.http.post(this.placeOrderUrl,{address:address,city:city,mobile:mobile,userId:uId,productId:productId})
  }
}
