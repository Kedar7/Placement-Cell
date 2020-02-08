import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from './login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent {
  title = 'app';
  loginStatus:boolean = false
  role:string = ""
  toggleStatus:boolean = false
  constructor(private router : Router,private login:LoginService, private detectChange:ChangeDetectorRef){


  }
  toggle(){
    this.toggleStatus = !this.toggleStatus;
  }
  ngOnInit(){
    this.login.watchLogin.subscribe((status)=>{
      this.loginStatus = status
      this.role = localStorage.getItem("role")
      console.log("\nApp COmponent Login watch",status)
      if(!status){
        console.log("Logout");

        this.router.navigate(["login"])
      }
    //   if(localStorage.getItem("loggedInStatus") == "1"){
    //     this.loginStatus = true
    //     this.router.navigate(["dashboard"])
    //   }else{
    //      this.loginStatus = false
    //
    //   }
    //   this.loginStatus = this.login.watchLogin
    //   this.detectChange.detectChanges()
    })
    if(localStorage.getItem("loggedInStatus") == "1"){
      this.loginStatus = true

      this.router.navigate(["dashboard"])
    }else{
       this.router.navigate(["home"])
       this.loginStatus = false

    }
  }

  takeSignup(path){
    this.router.navigate([path])
  }

  logout(){
    localStorage.removeItem("loggedInStatus")
    localStorage.removeItem("userId")
    localStorage.removeItem("role")
    this.login.watch(false);
    this.loginStatus = false;
    this.role = "";
    this.router.navigate(["login"])

  }
}
