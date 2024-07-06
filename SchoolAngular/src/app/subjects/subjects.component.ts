import {Component, OnInit} from "@angular/core";
import {Subject} from "../model/subject.model";
import {SubjectService} from "../service/subject.service";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {TeacherService} from "../service/teacher.service";

@Component({
  selector: "subjects-app",
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
  providers: [SubjectService]
})
export class SubjectsComponent  implements OnInit {

  subjects: Subject[] | undefined;

  constructor(private subjectService: SubjectService, private router: Router) {
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  private getSubjects() {
    this.subjectService.getSubjectList().subscribe(data => {
      this.subjects = data;
    });
  }

  updateSubject(id: number) {
    this.router.navigate(['subjects/subject-update', id]);
  }

  createSubject(){
    this.updateSubject(0);
  }

  deleteSubject(id: number) {
    this.subjectService.deleteSubject(id).subscribe(data => {
      console.log(data);
      this.getSubjects();
    });
  }
}

