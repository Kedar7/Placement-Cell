import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class HrsService {

  constructor(private http: HttpClient) { }

  getList(){
    let url = "http://localhost/gitpro2018/hrs"
    // let url = "http://localhost:3000/login"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.get(url,{headers:headers});
  }

  register(data){
    let url = "http://localhost/gitpro2018/hrs/register"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.post(url,JSON.stringify(data),{headers:headers});

  }

  getProfile(userId){
    let url = "http://localhost/gitpro2018/hrs/view/"+userId
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.post(url,{},{headers:headers});

  }


}
