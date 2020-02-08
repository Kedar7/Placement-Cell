import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  signup(data){

    let url = "http://localhost/gitpro2018/signup"
    let headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(url,data,{headers:headers})

  }


  listAll(model='',hr_id=''){
    console.log(hr_id)
    console.log(model)
    let url = "http://localhost/gitpro2018/"+model+"/index/"+hr_id
    let headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get(url,{headers:headers})

  }
}
