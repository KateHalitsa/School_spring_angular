import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from "../model/room.model";


@Injectable()
export class RoomService {

  private basUrl = "http://localhost:8080/room"

  constructor(private httpClient: HttpClient) {

  }

  getRoomList(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(`${this.basUrl}`);
  }

  createRoom(user: Room): Observable<Room> {
    return this.httpClient.post<Room>(`${this.basUrl}`, user);
  }

  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.basUrl}/${id}`);
  }

  updateRoom(id:number, room:Room): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/${id}`, room);
  }

  deleteRoom(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/${id}`);
  }

}
