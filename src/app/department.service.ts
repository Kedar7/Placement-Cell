import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAll(){
    let url = "http://localhost/gitpro2018/departments/index"
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    return this.http.post(url,{},{headers:headers});

  }

}
