import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject, BehaviorSubject } from "rxjs"
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  watchLogin:any = new Subject<any>()
  constructor(private http: HttpClient) {
    // this.watchLogin = new BehaviorSubject<any>(false)
    // console.log(this.watchLogin);
  }
  // init(){
  //   this.watchLogin = new BehaviorSubject<any>(false)
  // }
  check(data){
    // console.log("\nLogin data:",data);
    let url = "http://localhost/gitpro2018/users/login"
    // let url = "http://localhost:3000/login"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})

    let obj = this.http.post(url,data,{headers:headers})
    // console.log(obj);
    return obj

  }
  watch(status){
    // if(!this.watchLogin){
    //   this.init();
    // }
    console.log("\nLogin Watch Called",this.watchLogin)
    this.watchLogin.next(status)
  }
}
