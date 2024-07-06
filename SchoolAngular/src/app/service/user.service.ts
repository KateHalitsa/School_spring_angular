import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from "../model/user.model";
import {Teacher} from "../model/teacher.model";
import {Student} from "../model/student.model";

@Injectable()
export class UserService {

  private basUrl = "http://localhost:8080/user"

  constructor(private httpClient: HttpClient) {

  }

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.basUrl}`);
  }

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}`, user);
  }

  registerStudent(user: User, student: Student): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/registerStudent`, {user, student});
  }

  registerTeacher(user: User, teacher: Teacher): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/registerTeacher`, {user, teacher});
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.basUrl}/${id}`);
  }

  updateUser(id:number, user:User): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, user);
  }

  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }
}
