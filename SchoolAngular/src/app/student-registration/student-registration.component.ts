import { Component, ViewChild } from '@angular/core';
import {UserUpdateComponent} from "../user-update/user-update.component";
import {StudentUpdateComponent} from "../student-update/student-update.component";
import {UserService} from "../service/user.service";
import {StudentService} from "../service/student.service";
import {StorageService} from "../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [UserUpdateComponent, StudentUpdateComponent],
  providers: [UserService, StudentService],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {

 @ViewChild(UserUpdateComponent, {static:false})
 private userComponent!: UserUpdateComponent;

 @ViewChild(StudentUpdateComponent, {static:false})
 private studentComponent!: StudentUpdateComponent;

 constructor (private userService: UserService,
              private router: Router,
              private storageService: StorageService){

 }

  onSubmit() {
    console.log(this.userComponent.user);
    console.log(this.studentComponent.student);
    this.registerStudent();
  }

  registerStudent(){
    let user = this.userComponent.user;
    let student = this.studentComponent.student;

    this.userService.registerStudent(user, student).subscribe({
      next: (data) => {
        console.log(data);
        this.storageService.saveUser(data);
        this.router.navigate(['']);
      },
      error: (e) => {
        console.log(e);
      }
    });

  }
}
