import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from "../model/student.model";
import { StudentService } from "../service/student.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-student-update',
  standalone: true,
  templateUrl: './student-update.component.html',
  imports: [ FormsModule ],
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  id!: number;
  student: Student = new Student();

  @Input() showButtons = true;
  @Input() set studentId(studentId: number){
    this.id = studentId;
    this.studentService.getStudentById(studentId).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  constructor(private studentService: StudentService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  updateUser() {
    this.studentService.updateStudent(this.id, this.student).subscribe({
      next: (data) => {
        console.log(data);
        //this.redirectToUserList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onSubmit() {
    console.log(this.student);
    this.updateUser();
  }
}
