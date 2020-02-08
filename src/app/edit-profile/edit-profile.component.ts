import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentsService } from '../students.service'
import { DepartmentService } from '../department.service'
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  memberForm:FormGroup;
  message:string = ""
  departments : any = [];
  userId:string = "";
  constructor(private router:Router, private students:StudentsService, private dept:DepartmentService,private route:ActivatedRoute, private st: StudentsService, private fb:FormBuilder) {
    this.memberForm = this.fb.group({
      full_name:[null,Validators.compose([Validators.required,Validators.minLength(3)])],
      phone:[null,Validators.compose([Validators.required])],
      usn:[null,Validators.compose([Validators.required])],
      department_id:[null,Validators.compose([Validators.required])],
      id:[null,Validators.compose([Validators.required])],
      tenth_pct:[null,Validators.compose([Validators.required])],
      twelth_pct:[null,Validators.compose([Validators.required])],
      be_pct:[null,Validators.compose([Validators.required])],
      email:[null,Validators.compose([Validators.required,Validators.email])],
    })
   }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("userId")

    this.st.profile(this.userId).subscribe(res=>{
      this.memberForm.patchValue(res["data"])
    })

    this.dept.getAll().subscribe(res=>{
      this.departments = res;
    })
  }

  formSubmit(data){

    console.log("Update data:",data)
    this.students.updateProfile(data,this.userId).subscribe(res=>{
        if(res["status"]){
          console.log("Student record inserted")
          this.message = "Student Registered Successfully"
        //  this.router.navigate(["/dashboard"]);
        }
    })

  }
}
