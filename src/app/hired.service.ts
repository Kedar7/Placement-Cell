import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class HiredService {

  constructor(private http: HttpClient) { }

  updateStatus(data){

    let url = "http://localhost/gitpro2018/hired/update_status"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.post(url,JSON.stringify(data),{headers:headers});

  }
}
