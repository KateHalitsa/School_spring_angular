import { Component, ViewChild } from '@angular/core';
import {UserUpdateComponent} from "../user-update/user-update.component";
import {TeacherUpdateComponent} from "../teacher-update/teacher-update.component";
import {UserService} from "../service/user.service";
import {TeacherService} from "../service/teacher.service";
import {StorageService} from "../service/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-registration',
  standalone: true,
  imports: [UserUpdateComponent, TeacherUpdateComponent],
  providers: [UserService, TeacherService],
  templateUrl: './teacher-registration.component.html',
  styleUrl: './teacher-registration.component.css'
})
export class TeacherRegistrationComponent {

 @ViewChild(UserUpdateComponent, {static:false})
 private userComponent!: UserUpdateComponent;

 @ViewChild(TeacherUpdateComponent, {static:false})
 private teacherComponent!: TeacherUpdateComponent;

 constructor (private userService: UserService,
              private router: Router,
              private storageService: StorageService){

 }

  onSubmit() {
    console.log(this.userComponent.user);
    console.log(this.teacherComponent.teacher);
    this.registerTeacher();
  }

  registerTeacher(){
    let user = this.userComponent.user;
    let teacher = this.teacherComponent.teacher;

    this.userService.registerTeacher(user, teacher).subscribe({
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
