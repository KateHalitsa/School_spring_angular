import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TeacherSubjectService} from "../service/teacher.subject.service";
import {TeacherSubject} from "../model/teacher.subject.model";
import {NgTemplateOutlet, DatePipe} from "@angular/common";
import { FormsModule }   from "@angular/forms";
import {StorageService} from "../service/storage.service";

import {SubjectService} from "../service/subject.service";
import {Subject} from "../model/subject.model";
//import {SubjectGeneralView} from "../model/subject.general.view.model";

@Component({
  selector: 'teacher-info-subject-app',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FormsModule,
    DatePipe
  ],
  providers: [TeacherSubjectService, StorageService, SubjectService],
  templateUrl: './teacher-info-subjects.component.html',
  styleUrl: './teacher-info-subjects.component.css'
})
export class TeacherInfoSubjectsComponent implements OnInit {

  //типы шаблонов
  @ViewChild("readOnlyTemplate", {static: false}) readOnlyTemplate: TemplateRef<any>|null = null;
  @ViewChild("editTemplate", {static: false}) editTemplate: TemplateRef<any>|null = null;

  currentTeacherId!: number;
  teacherSubjects: TeacherSubject[]  = new Array<TeacherSubject>();
  editedTeacherSubject: TeacherSubject = new TeacherSubject(0, 0, 0);
  isNewRecord: boolean = false;
  statusMessage: string = "";
  subjects:Subject[]=[];

  constructor(
    private teacherSubjectService: TeacherSubjectService,
    private storageService: StorageService,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.currentTeacherId = this.storageService.getUser().teacherId;
    this.getSubjects();
  }

  private getSubjects() {
    this.subjectService.getSubjectList().subscribe(data => {
      this.subjects = data;
      this.loadTeacherSubjects();
    });
  }

  getSubjectDescription(subjectId: number)
  {
    let index= this.subjects.findIndex(subj=> subj.id === subjectId)
    if(index >= 0){
      let subject= this.subjects[index];
      return subject.name;
    }
    else{
      return "";
    }
  }
  notUsedSubjects(): Subject[]{
    return this.subjects.filter(a => !this.teacherSubjects.map(b=>b.subjectId).includes(a.id))
  }

  loadTeacherSubjects(){
    this.teacherSubjectService.findTeacherSubjectListForTeacher(this.currentTeacherId).subscribe({
      next: (data) => {
        this.teacherSubjects = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  // добавление пользователя
  addTeacherSubject() {
    this.editedTeacherSubject = new TeacherSubject(0, this.currentTeacherId, 0);
    this.teacherSubjects.push(this.editedTeacherSubject);
    this.isNewRecord = true;
  }


  // редактирование пользователя
  editTeacherSubject(teacherSubject: TeacherSubject) {
    this.editedTeacherSubject = new TeacherSubject(teacherSubject.id, teacherSubject.teacherId, teacherSubject.subjectId);
  }
  // загружаем один из двух шаблонов
  loadTemplate(teacherSubject: TeacherSubject): TemplateRef<any>|null {
    if (this.editedTeacherSubject && this.editedTeacherSubject.id === teacherSubject.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  // сохраняем пользователя
  saveTeacherSubject() {
    if (this.isNewRecord) {
      // добавляем пользователя
      this.teacherSubjectService.createTeacherSubject(this.editedTeacherSubject).subscribe(_ => {
        this.statusMessage = "Данные успешно добавлены",
          this.loadTeacherSubjects();
      });
      this.isNewRecord = false;
      this.editedTeacherSubject = new TeacherSubject(0, this.currentTeacherId, 0);
    } else {
      // изменяем пользователя
      let schedule = this.editedTeacherSubject;
      this.teacherSubjectService.updateTeacherSubject(schedule.id, schedule).subscribe(_ => {
        this.statusMessage = "Данные успешно обновлены",
          this.loadTeacherSubjects();
      });
      this.editedTeacherSubject = new TeacherSubject(0, this.currentTeacherId, 0);
    }
  }
  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.teacherSubjects.pop();
      this.isNewRecord = false;
    }
    this.editedTeacherSubject = new TeacherSubject(0, this.currentTeacherId, 0);
  }
  // удаление пользователя
  deleteTeacherSubject(teacherSubject: TeacherSubject) {
    this.teacherSubjectService.deleteTeacherSubject(teacherSubject.id).subscribe(_ => {
      this.statusMessage = "Данные успешно удалены",
        this.loadTeacherSubjects();
    });
  }

}

