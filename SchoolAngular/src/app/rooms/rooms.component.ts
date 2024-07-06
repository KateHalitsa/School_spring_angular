import { Component} from "@angular/core";

import {RoomService} from "../service/room.service";
import {Room} from "../model/room.model";

import {Router} from "@angular/router";

@Component({
  selector: "rooms-app",
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  providers: [RoomService]

})
export class RoomsComponent {
  rooms: Room[] | undefined;

  constructor(private roomService: RoomService, private router: Router) {
  }

  ngOnInit(): void {
    this.getRooms();
  }

  private getRooms() {
    this.roomService.getRoomList().subscribe(data => {
      this.rooms = data;
    });
  }

  updateRoom(id: number) {
    this.router.navigate(['rooms/room-update', id]);
  }

  createRoom(){
    this.updateRoom(0);
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe(data => {
      console.log(data);
      this.getRooms();
    });
  }
}

