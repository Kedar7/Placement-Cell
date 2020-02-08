import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class StudentsService {

    constructor(private http: HttpClient) { }

    getList(){
      let url = "http://localhost/gitpro2018/students"
      // let url = "http://localhost:3000/login"
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      return this.http.get(url,{headers:headers});
    }

    register(data){
      let url = "http://localhost/gitpro2018/students/register"
      // let url = "http://localhost:3000/login"
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      return this.http.post(url,JSON.stringify(data),{headers:headers});

    }
    updateProfile(data,userId){
      let url = "http://localhost/gitpro2018/students/update/"+userId
      // let url = "http://localhost:3000/login"
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      return this.http.post(url,JSON.stringify(data),{headers:headers});

    }

    profile(userId){
      let url = "http://localhost/gitpro2018/students/view/"
      // let url = "http://localhost:3000/login"
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
      return this.http.post(url,{userId:userId},{headers:headers});

    }

}
