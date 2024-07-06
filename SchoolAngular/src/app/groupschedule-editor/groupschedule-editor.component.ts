import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {GroupScheduleService} from "../service/group.schedule.service";
import {GroupSchedule} from "../model/group.schedule.model";
import {NgTemplateOutlet, DatePipe} from "@angular/common";
import { FormsModule }   from "@angular/forms";
import {RoomService} from "../service/room.service";
import {Room} from "../model/room.model";
import {switchMap} from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-groupschedule-editor',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FormsModule,
    DatePipe
  ],
  providers: [GroupScheduleService, RoomService],
  templateUrl: './groupschedule-editor.component.html',
  styleUrl: './groupschedule-editor.component.css'
})
export class GroupScheduleEditorComponent implements OnInit {

  //типы шаблонов
  @ViewChild("readOnlyTemplate", {static: false}) readOnlyTemplate: TemplateRef<any>|null = null;
  @ViewChild("editTemplate", {static: false}) editTemplate: TemplateRef<any>|null = null;

  relatedGroupId!: number;
  groupSchedules: GroupSchedule[]  = new Array<GroupSchedule>();
  editedGroupSchedule: GroupSchedule = new GroupSchedule(0, 0, 0, new Date());
  isNewRecord: boolean = false;
  statusMessage: string = "";

  rooms:Room[] = new Array<Room>;

  public getDescById(roomId:number)
  {
    let index= this.rooms.findIndex(r=>r.id===roomId)
    if(index >= 0){
      let room= this.rooms[index];
      return room.address + ", кабинет " + room.number + ", этаж " + room.floor;
    }
    else{
      return "";
    }
  }

  constructor(
    private groupScheduleService: GroupScheduleService,
    private roomsService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRooms();

  }

  @Input() groupName: string = "";
  @Input() set groupId(groupId: number){
    if (groupId > 0) {
      this.relatedGroupId = groupId;
      this.loadGroupSchedules();
    }
  }

  private getRooms() {
    this.roomsService.getRoomList().subscribe(data => {
      this.rooms = data;
    });
  }
  loadGroupSchedules(){
    this.groupScheduleService.getGroupScheduleListForGroup(this.relatedGroupId).subscribe({
      next: (data) => {
        this.groupSchedules = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  // добавление пользователя
  addGroupSchedule() {
    this.editedGroupSchedule = new GroupSchedule(0, this.relatedGroupId, 0, new Date(Date.now()));
    this.groupSchedules.push(this.editedGroupSchedule);
    this.isNewRecord = true;
  }

  // редактирование пользователя
  editUser(schedule: GroupSchedule) {
    this.editedGroupSchedule = new GroupSchedule(schedule.id, schedule.groupId, schedule.roomId, schedule.startTime);
  }
  // загружаем один из двух шаблонов
  loadTemplate(groupSchedule: GroupSchedule): TemplateRef<any>|null {
    if (this.editedGroupSchedule && this.editedGroupSchedule.id === groupSchedule.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  // сохраняем пользователя
  saveGroupSchedule() {
    if (this.isNewRecord) {
      // добавляем пользователя
      this.groupScheduleService.createGroupSchedule(this.editedGroupSchedule as GroupSchedule).subscribe(_ => {
        this.statusMessage = "Данные успешно добавлены",
          this.loadGroupSchedules();
      });
      this.isNewRecord = false;
      this.editedGroupSchedule = new GroupSchedule(0, this.relatedGroupId, 0, new Date(Date.now()));
    } else {
      // изменяем пользователя
      let schedule = this.editedGroupSchedule as GroupSchedule;
      this.groupScheduleService.updateGroupSchedule(schedule.id, schedule).subscribe(_ => {
        this.statusMessage = "Данные успешно обновлены",
          this.loadGroupSchedules();
      });
      this.editedGroupSchedule = new GroupSchedule(0, this.relatedGroupId, 0, new Date(Date.now()));
    }
  }
  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.groupSchedules.pop();
      this.isNewRecord = false;
    }
    this.editedGroupSchedule = new GroupSchedule(0, this.relatedGroupId, 0, new Date(Date.now()));
  }
  // удаление пользователя
  deleteGroupSchedule(groupSchedule: GroupSchedule) {
    this.groupScheduleService.deleteGroupSchedule(groupSchedule.id).subscribe(_ => {
      this.statusMessage = "Данные успешно удалены",
        this.loadGroupSchedules();
    });
  }

}
