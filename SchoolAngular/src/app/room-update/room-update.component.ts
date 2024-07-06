import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from "../model/room.model";
import { RoomService } from "../service/room.service";
import { FormsModule } from "@angular/forms";
import { switchMap } from "rxjs";


@Component({
  selector: 'app-room-update',
  standalone: true,
  templateUrl: './room-update.component.html',
  imports: [FormsModule],
  providers: [ RoomService ],
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {
  id: number = 0;
  room: Room = new Room();


  setRoomId(roomId: number){
    this.id = roomId;
    this.roomService.getRoomById(roomId).subscribe({
      next: (data) => {
        this.room = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data=> this.setRoomId( +data));
  }


  updateRoom(closeEditor: boolean) {
    this.roomService.updateRoom(this.id, this.room).subscribe({
      next: (data) => {
        console.log(data);
        if (closeEditor) this.redirectToRoomList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  createRoom(closeEditor: boolean){
    this.roomService.createRoom(this.room).subscribe({
      next: (data) => {
        console.log(data);
        this.room = data;
        this.id = data.id;
        if (closeEditor)  this.redirectToRoomList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onSubmit(closeEditor: boolean) {
    console.log(this.room);
    if (this.id > 0)
      this.updateRoom(closeEditor);
    else
      this.createRoom(closeEditor);
  }

  redirectToRoomList(){
    this.router.navigate(['rooms']);
  }
}
