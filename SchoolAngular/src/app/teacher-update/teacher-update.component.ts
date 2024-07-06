import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from "../model/teacher.model";
import { TeacherService } from "../service/teacher.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-teacher-update',
  standalone: true,
  templateUrl: './teacher-update.component.html',
  imports: [ FormsModule ],
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {
  id!: number;
  teacher: Teacher = new Teacher();

  @Input() showButtons = true;

  @Input() set teacherId(teacherId: number){
    if (teacherId > 0) {
      this.id = teacherId;
      this.teacherService.getTeacherById(teacherId).subscribe({
        next: (data) => {
          this.teacher = data;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }else {
      /*
      this.id = undefined;
      this.teacher = new Teacher();
      */
    }
  }

  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  updateUser() {
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe({
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
    console.log(this.teacher);
    this.updateUser();
  }
}
