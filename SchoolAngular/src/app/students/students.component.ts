import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from "../service/student.service";
import { Student } from "../model/student.model";

@Component({
  selector: 'students-app',
  standalone: true,
  templateUrl: './students.component.html',
  imports: [],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {

  students: Student[] | undefined;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number) {
    this.studentService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    });
  }
}

