import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TeacherSubject} from "../model/teacher.subject.model";

@Injectable()
export class TeacherSubjectService {

  private basUrl = "http://localhost:8080/teachersubject"

  constructor(private httpClient: HttpClient) {

  }

  getTeacherSubjectList(): Observable<TeacherSubject[]> {
    return this.httpClient.get<TeacherSubject[]>(`${this.basUrl}`);
  }

  findTeacherSubjectListForTeacher(teacherId: number): Observable<TeacherSubject[]> {
    return this.httpClient.get<TeacherSubject[]>(`${this.basUrl}/find-for-teacher/${teacherId}`);
  }

  createTeacherSubject(teacherSubject: TeacherSubject): Observable<TeacherSubject> {
    return this.httpClient.post<TeacherSubject>(`${this.basUrl}`, teacherSubject);
  }

  getTeacherSubjectById(id: number): Observable<TeacherSubject>{
    return this.httpClient.get<TeacherSubject>(`${this.basUrl}/${id}`);
  }

  updateTeacherSubject(id:number, teacherSubject:TeacherSubject): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, teacherSubject);
  }

  deleteTeacherSubject(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

}
