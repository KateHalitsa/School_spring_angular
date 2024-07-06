/*
import { Component} from "@angular/core";

@Component({
  selector: "teachers-app",
  template: "<h2>Учителя работающие в школе</h2>"
})
export class TeachersComponent { }
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from "../service/teacher.service";
import { Teacher } from "../model/teacher.model";

@Component({
  selector: 'teachers-app',
  standalone: true,
  templateUrl: './teachers.component.html',
  imports: [],
  providers: [TeacherService]
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] | undefined;

  constructor(private teacherService: TeacherService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getTeacherList().subscribe(data => {
      this.teachers = data;
    });
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id).subscribe(data => {
      console.log(data);
      this.getTeachers();
    }
    /*,error => {
      console.log('HTTP Error', error)
      alert(error.error.message);
    }*/
    )
  }
}


