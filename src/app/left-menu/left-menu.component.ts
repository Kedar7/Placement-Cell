import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../login.service'
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router : Router,private login:LoginService) { }

  ngOnInit() {
  }
  logout(){
    localStorage.removeItem("loggedInStatus")
    localStorage.removeItem("userId")
    localStorage.removeItem("role")
    this.login.watch(false);
    // this.loginStatus = false;
    this.router.navigate(["login"])
  }
}
