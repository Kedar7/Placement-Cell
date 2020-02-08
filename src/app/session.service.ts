import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class SessionService {

  constructor(private http: HttpClient) { }

  isAvailable(date){
    let url = "http://localhost/gitpro2018/sessions/is_available/"+date
    // let url = "http://localhost:3000/login"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.post(url,{},{headers:headers});
  }
  registerBooking(data){
    let url = "http://localhost/gitpro2018/sessions/register/"
    // let url = "http://localhost:3000/login"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.post(url,JSON.stringify(data),{headers:headers});
  }


}
