import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GroupSchedule} from "../model/group.schedule.model";
import {GroupScheduleView} from "../model/group.schedule.view.model";
import {GroupScheduleStudentView} from "../model/group.schedule.student.view.model";

@Injectable()
export class GroupScheduleService {

  private basUrl = "http://localhost:8080/groupschedule"

  constructor(private httpClient: HttpClient) {

  }

  getGroupScheduleList(): Observable<GroupSchedule[]> {
    return this.httpClient.get<GroupSchedule[]>(`${this.basUrl}`);
  }

  getGroupScheduleListForGroup(groupId: number): Observable<GroupSchedule[]> {
    return this.httpClient.get<GroupSchedule[]>(`${this.basUrl}/find-for-group/${groupId}`);
  }

  createGroupSchedule(groupSchedule: GroupSchedule): Observable<GroupSchedule> {
    return this.httpClient.post<GroupSchedule>(`${this.basUrl}`, groupSchedule);
  }

  getGroupScheduleById(id: number): Observable<GroupSchedule>{
    return this.httpClient.get<GroupSchedule>(`${this.basUrl}/${id}`);
  }

  updateGroupSchedule(id:number, groupSchedule:GroupSchedule): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, groupSchedule);
  }

  deleteGroupSchedule(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

  findGroupScheduleViewListByTeacherId(teacherId: number): Observable<GroupScheduleView[]> {
    return this.httpClient.get<GroupScheduleView[]>(`${this.basUrl}/find-for-teacher/${teacherId}`);
  }

  findGroupScheduleViewListByStudentId(studentId: number): Observable<GroupScheduleStudentView[]> {
    return this.httpClient.get<GroupScheduleStudentView[]>(`${this.basUrl}/find-for-student/${studentId}`);
  }

  findGroupScheduleViewById(id: number): Observable<GroupScheduleView> {
    return this.httpClient.get<GroupScheduleView>(`${this.basUrl}/find-view-by-id/${id}`);
  }


}
