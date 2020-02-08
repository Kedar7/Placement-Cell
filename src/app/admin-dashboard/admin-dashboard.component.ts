import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service'
import { UserService } from '../user.service'
import { DepartmentService } from '../department.service'
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  studentsData:any = []
  filteredStudents:any = []
  hrData:any = []
  searchTerm:string = "35"
  department_id:string = ""
  departments:any = []
  constructor(private dept:DepartmentService, private students: StudentsService,private users: UserService) {


    this.dept.getAll().subscribe(res=>{
      this.departments = res;
    })

    this.users.listAll('hrs').subscribe(res=>{
      console.log("\nHrs",res);
      this.hrData = res;
    })

    this.users.listAll('students',"0").subscribe(res=>{
      this.studentsData = res;//.filter(item=>item.role==localStorage.getItem('role'))
      this.filteredStudents = res
      console.log("\nResult",res)

    });

   }

  ngOnInit() {


  }

  search(term){
    if(term.length==0){
      this.filteredStudents = this.students;
      return;
    }
    this.filteredStudents = this.studentsData.filter(item=>{
      if( parseInt(item.department_id) == parseInt(this.department_id)){
        if(parseFloat(item.be_pct) != 0){
          if(parseFloat(item.be_pct) >= parseFloat(this.searchTerm)){
            return true;
          }else{
            return false;
          }
        }
        return true;
      }
    })
  }

}
