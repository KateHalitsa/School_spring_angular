import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {StudentGroup} from "../model/student.group.model";

@Injectable()
export class StudentGroupService {

  private basUrl = "http://localhost:8080/studentgroup"

  constructor(private httpClient: HttpClient) {

  }

  getStudentGroupList(): Observable<StudentGroup[]> {
    return this.httpClient.get<StudentGroup[]>(`${this.basUrl}`);
  }

  findStudentGroupListForStudent(studentId: number): Observable<StudentGroup[]> {
    return this.httpClient.get<StudentGroup[]>(`${this.basUrl}/find-for-student/${studentId}`);
  }

  createStudentGroup(studentGroup: StudentGroup): Observable<StudentGroup> {
    return this.httpClient.post<StudentGroup>(`${this.basUrl}`, studentGroup);
  }

  getStudentGroupById(id: number): Observable<StudentGroup>{
    return this.httpClient.get<StudentGroup>(`${this.basUrl}/${id}`);
  }

  updateStudentGroup(id:number, studentGroup:StudentGroup): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, studentGroup);
  }

  deleteStudentGroup(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

}
