import { Component, OnInit } from '@angular/core';
import {UserService } from "../user.service"
import {HrsService } from "../hrs.service"
import {DepartmentService } from "../department.service"
import {HiredService } from "../hired.service"
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {
  students:any = []
  filteredStudents:any = []
  departments : any = [];
  searchTerm:string = "";
  department_id:any= "";
  hr_id:string = "0";
  hrData:any = {}
  constructor(private hired: HiredService, private hrs:HrsService, private dept:DepartmentService,private users:UserService) { }

  ngOnInit() {
    //get hr details
    this.hrs.getProfile(localStorage.getItem('userId')).subscribe(hr=>{
      this.hr_id = hr[0]['id'];
      this.hrData = hr;
      console.log("\nHR DATA:",hr);
      console.log(this.hr_id);
      this.users.listAll('students',this.hr_id).subscribe(res=>{
        this.students = res;//.filter(item=>item.role==localStorage.getItem('role'))
        this.filteredStudents = this.students;
        console.log("\nResult",this.filteredStudents)

      });

      this.dept.getAll().subscribe(res=>{
        this.departments = res;
      })
    })

  }
  updateStatus(event,student_id){
    console.log("\n Hired status:",event.target.checked)
    this.hired.updateStatus({
      student_id : student_id,
      hr_id : this.hr_id,
      status : event.target.checked
    }).subscribe(res=>{
      console.log("Update Status",res)
      if(res[status]){

      }
    })
  }
  search(term){
    if(term.length==0){
      this.filteredStudents = this.students;
      return;
    }
    this.filteredStudents = this.students.filter(item=>{
      if(parseFloat(item.be_pct)>= parseFloat(this.searchTerm) && parseInt(item.department_id) == parseInt(this.department_id)){
        return true;
      }
    })
  }

}
