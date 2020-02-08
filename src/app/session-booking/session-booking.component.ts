import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service'
import { ActivatedRoute } from '@angular/router'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-session-booking',
  templateUrl: './session-booking.component.html',
  styleUrls: ['./session-booking.component.css']
})
export class SessionBookingComponent implements OnInit {
  hrId:string = "";
  message:string = "";
  disabled:boolean = true;
  bookForm : FormGroup
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private session:SessionService) {

  }


  ngOnInit() {
    this.hrId = this.route.snapshot.paramMap.get('hr_id');
    this.bookForm = this.fb.group({
      'hr_id':[this.hrId,Validators.compose([Validators.required])],
      'created':[null,Validators.compose([Validators.required])]
    })
  }

  isAvaliable(date){
    this.message = ""
    console.log(date);
    this.session.isAvailable(date).subscribe(res=>{
      console.log("\nIs Available:",res);
      this.message = res["message"];
      this.disabled  = !res["status"];
    })
  }

  formSubmit(data){
    this.session.registerBooking(data).subscribe(res=>{
      this.message = res["message"];
    })
  }

}
