import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from "../model/subject.model";
import { SubjectService } from "../service/subject.service";
import { FormsModule } from "@angular/forms";
import { switchMap } from "rxjs";


@Component({
  selector: 'app-subject-update',
  standalone: true,
  templateUrl: './subject-update.component.html',
  imports: [FormsModule],
  providers: [ SubjectService ],
  styleUrls: ['./subject-update.component.css']
})
export class SubjectUpdateComponent implements OnInit {
  id: number = 0;
  subject: Subject = new Subject();


  setSubjectId(subjectId: number){
    this.id = subjectId;
    this.subjectService.getSubjectById(subjectId).subscribe({
      next: (data) => {
        this.subject = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data=> this.setSubjectId( +data));
  }


  updateSubject(closeEditor: boolean) {
    this.subjectService.updateSubject(this.id, this.subject).subscribe({
      next: (data) => {
        console.log(data);
        if (closeEditor) this.redirectToSubjectList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  createSubject(closeEditor: boolean){
    this.subjectService.createSubject(this.subject).subscribe({
      next: (data) => {
        console.log(data);
        this.subject = data;
        this.id = data.id;
        if (closeEditor)  this.redirectToSubjectList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onSubmit(closeEditor: boolean) {
    console.log(this.subject);
    if (this.id > 0)
      this.updateSubject(closeEditor);
    else
      this.createSubject(closeEditor);
  }

  redirectToSubjectList(){
    this.router.navigate(['subjects']);
  }
}
