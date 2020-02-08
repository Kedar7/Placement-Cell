import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hrLoginForm: FormGroup
  adminLoginForm: FormGroup
  studentLoginForm: FormGroup
  loginStatus:string = ""
  loginData:any

  constructor( private login: LoginService,  private router: Router, private fb: FormBuilder) {
    this.hrLoginForm = this.fb.group({
      username : [null,Validators.compose([Validators.required])],
      password : [null,Validators.compose([Validators.required])],
      type:['HR']
    })
    this.studentLoginForm = this.fb.group({
      username : [null,Validators.compose([Validators.required])],
      password : [null,Validators.compose([Validators.required])],
      type:['Student']
    })


    this.adminLoginForm = this.fb.group({
      username : [null,Validators.compose([Validators.required])],
      password : [null,Validators.compose([Validators.required])],
      type:['Admin']
    })


   }

  ngOnInit() {
  }

  hrLogin(data){
        localStorage.setItem("role",'Hr')
        localStorage.setItem("loggedInStatus","1")
        localStorage.setItem("userId",'2')
        this.router.navigate(["/dashboard"])
        this.login.watch(true)
    }


    // this.login.check(
    //   {username: data.username,password:data.password}
    // ).subscribe((res:any)=>{
    //   console.log("\n\nLogin response:",res)

    // })



  
  adminLogin(data){
    console.log("\n\nAdmin Login data",data)
    // this.login.check(data).subscribe(res=>{
    //   console.log("\nResponse:",res)

    //   if(res["status"]){
        localStorage.setItem("role","Admin")
        localStorage.setItem("loggedInStatus","1")
        this.router.navigate(["/dashboard"])
        localStorage.setItem("userId","2")
        this.login.watch(true)
    //   }else{
    //     this.loginStatus = "Invalid Username/Password"
    //   }
    // })

  }

  studentLogin(data){
    console.log("\n\nStudent Login data",data)
    // this.login.check(data).subscribe(res=>{
    //   console.log("\nResponse:",res)

    //   if(res["status"]){
        localStorage.setItem("role","student")
        localStorage.setItem("userId","5");

        localStorage.setItem("loggedInStatus","1")
        this.router.navigate(["/dashboard"])
        this.login.watch(true)
    //   }else{
    //     this.loginStatus = "Invalid Username/Password"
    //   }
    // })

  }

}
