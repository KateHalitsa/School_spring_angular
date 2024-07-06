import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Attendance} from "../model/attendance.model";
import {AttendanceView} from "../model/attendance.view.model";

@Injectable()
export class AttendanceService {

  private basUrl = "http://localhost:8080/attendance"

  constructor(private httpClient: HttpClient) {

  }

  getAttendanceList(): Observable<Attendance[]> {
    return this.httpClient.get<Attendance[]>(`${this.basUrl}`);
  }

  createAttendance(attendance: Attendance): Observable<Attendance> {
    return this.httpClient.post<Attendance>(`${this.basUrl}`, attendance);
  }

  getAttendanceById(id: number): Observable<Attendance>{
    return this.httpClient.get<Attendance>(`${this.basUrl}/${id}`);
  }

  updateAttendance(id:number, attendance:Attendance): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, attendance);
  }

  deleteAttendance(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

  findForGroupSchedule(groupScheduleId: number): Observable<AttendanceView[]> {
    return this.httpClient.get<AttendanceView[]>(`${this.basUrl}/find-for-group-schedule/${groupScheduleId}`);
  }

  updateAttendances(groupScheduleId: number, attendance: AttendanceView[]): Observable<AttendanceView[]>{
    return this.httpClient.put<AttendanceView[]>(`${this.basUrl}/update-attendances/${groupScheduleId}`, attendance);
  }

}
