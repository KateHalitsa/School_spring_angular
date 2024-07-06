import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from "../model/subject.model";


@Injectable()
export class SubjectService {

  private basUrl = "http://localhost:8080/subject"

  constructor(private httpClient: HttpClient) {

  }

  getSubjectList(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`${this.basUrl}`);
  }

  createSubject(user: Subject): Observable<Subject> {
    return this.httpClient.post<Subject>(`${this.basUrl}`, user);
  }

  getSubjectById(id: number): Observable<Subject>{
    return this.httpClient.get<Subject>(`${this.basUrl}/${id}`);
  }

  updateSubject(id:number, subject:Subject): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, subject);
  }

  deleteSubject(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

}
