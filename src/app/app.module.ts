import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { UserService } from './user.service';
import { HrsService } from './hrs.service';
import { DepartmentService } from './department.service';
import { StudentsService } from './students.service';
import { SessionService } from './session.service';
// import { LoginService } from './login.service';
import { HiredService } from './hired.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TypeListComponent } from './type-list/type-list.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SessionBookingComponent } from './session-booking/session-booking.component'

const routes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'sign-up/:type',component:SignupComponent},
  {path:'edit-profile/:userId',component:EditProfileComponent},
  {path:'book-session/:hr_id',component:SessionBookingComponent  },
  {path:'dashboard',component:DashboardComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo: '/home', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    LeftMenuComponent,
    ContactUsComponent,
    TypeListComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    HrDashboardComponent,
    EditProfileComponent,
    SessionBookingComponent
  ],
  imports: [
    HttpClientModule,FormsModule, BrowserModule,ReactiveFormsModule,RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [HiredService, DepartmentService,SessionService,UserService,StudentsService,HrsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
