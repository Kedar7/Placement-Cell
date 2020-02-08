import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../user.service'
import { StudentsService } from '../students.service'
import { HrsService } from '../hrs.service'
import { DepartmentService } from '../department.service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type:string="student"
  memberForm:FormGroup
  message:string = ''
  departments : any = [];
  constructor(private dept:DepartmentService, private router: Router, private hr:HrsService, private students:StudentsService, private fb:FormBuilder, private route: ActivatedRoute,private user:UserService) {


  }

  ngOnInit() {
    this.dept.getAll().subscribe(res=>{
      this.departments = res;
    })
    this.route.params.subscribe(param=>{
        this.type = param.type
        console.log(this.type)

        let form={}
        switch(this.type){
          case "admin":
          form = {
            company_name:[null,Validators.compose([Validators.required,Validators.minLength(3)])],
            phone:[null,Validators.compose([Validators.required])],
            eligibility:[null,Validators.compose([Validators.required])],
            email:[null,Validators.compose([Validators.required,Validators.email])],
            date:[null,Validators.compose([Validators.required])],
          };

          break;
          case "student":
          form = {
            full_name:[null,Validators.compose([Validators.required,Validators.minLength(3)])],
            phone:[null,Validators.compose([Validators.required])],
            usn:[null,Validators.compose([Validators.required])],
            department_id:[null,Validators.compose([Validators.required])],
            password:[null,Validators.compose([Validators.required])],
            confirm_password:[null,Validators.compose([Validators.required])],
            tenth_pct:[null,Validators.compose([Validators.required])],
            twelth_pct:[null,Validators.compose([Validators.required])],
            be_pct:[null,Validators.compose([Validators.required])],
            email:[null,Validators.compose([Validators.required,Validators.email])],
          };

          break;
          case "hr":
            form = {
              company_name:[null,Validators.compose([Validators.required,Validators.minLength(3)])],
              phone:[null,Validators.compose([Validators.required])],
              eligibility:[null,Validators.compose([Validators.required])],
              password:[null,Validators.compose([Validators.required])],
              confirm_password:[null,Validators.compose([Validators.required])],
              email:[null,Validators.compose([Validators.required,Validators.email])],
              date:[null,Validators.compose([Validators.required])],
            };
          break;
        }

        this.memberForm = this.fb.group(form)
    })

    console.log(this.type)
  }

  formSubmit(data){

    console.log(data)

    switch(this.type){
      case "admin":


      break;
      case "student":
        this.students.register(data).subscribe(res=>{
            if(res["status"]){
              console.log("Student record inserted")
              this.message = "Student Registered Successfully"
              this.router.navigate(["/login"]);
            }
        })
      break;
      case "hr":
        this.hr.register(data).subscribe(res=>{
            if(res["status"]){
              console.log("HR record inserted");
              this.message = "Company registered successfully"
              this.router.navigate(["/login"]);
            }
        })
      break;
    }


  }

  setDeptId(id){
    this.memberForm.patchValue({department_id:id})
  }

}
