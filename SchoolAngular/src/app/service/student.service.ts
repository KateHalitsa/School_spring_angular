import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from "../model/student.model";

@Injectable()
export class StudentService {

  private basUrl = "http://localhost:8080/student"

  constructor(private httpClient: HttpClient) {

  }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.basUrl}`);
  }

  createStudent(user: Student): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, user);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.basUrl}/${id}`);
  }

  updateStudent(id:number, student:Student): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, student);
  }

  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }
}
