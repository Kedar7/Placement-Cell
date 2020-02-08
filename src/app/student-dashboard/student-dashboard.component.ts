import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service'
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  userId:string="";
  studentData:any = [];
  constructor(private st:StudentsService) { }

  ngOnInit() {
    console.log("\n\nStudent Dashboard")
    this.userId = localStorage.getItem("userId")
    this.st.profile(this.userId).subscribe(res=>{
      console.log("\nProfile Data",res);
      this.studentData = res["data"];
    })
  }

}
