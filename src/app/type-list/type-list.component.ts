import { Component, OnInit } from '@angular/core';
import { UserService} from "../user.service"
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {
  users:any = []
  type:string = ""
  constructor(private route:ActivatedRoute, private userv:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.type = res.type
      // this.userv.listAll(this.type).subscribe(data=>{
        // this.users = data
      // })
    })
  }

}
