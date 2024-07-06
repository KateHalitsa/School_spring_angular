import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from "../model/teacher.model";

@Injectable()
export class TeacherService {

  private basUrl = "http://localhost:8080/teacher"

  constructor(private httpClient: HttpClient) {

  }

  getTeacherList(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${this.basUrl}`);
  }

  createTeacher(user: Teacher): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, user);
  }

  getTeacherById(id: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.basUrl}/${id}`);
  }

  updateTeacher(id:number, teacher:Teacher): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, teacher);
  }

  deleteTeacher(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }
}
