import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from "../model/group.model";
import { GroupGeneralView } from "../model/group.general.view.model";

@Injectable()
export class GroupService {

  private basUrl = "http://localhost:8080/group"

  constructor(private httpClient: HttpClient) {

  }

  getGroupList(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.basUrl}`);
  }

  createGroup(user: Group): Observable<Group> {
    return this.httpClient.post<Group>(`${this.basUrl}`, user);
  }

  getGroupById(id: number): Observable<Group>{
    return this.httpClient.get<Group>(`${this.basUrl}/${id}`);
  }

  updateGroup(id:number, group:Group): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, group);
  }

  deleteGroup(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

  generalView(): Observable<GroupGeneralView[]> {
    return this.httpClient.get<GroupGeneralView[]>(`${this.basUrl}/general-view`);
  }

}
