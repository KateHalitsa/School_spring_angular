import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from "../model/group.model";
import { GroupService } from "../service/group.service";
import { FormsModule } from "@angular/forms";
import { switchMap } from "rxjs";
import {TeacherService} from "../service/teacher.service";
import {Teacher} from "../model/teacher.model";
import {GroupScheduleEditorComponent} from "../groupschedule-editor/groupschedule-editor.component";
import {RoomService} from "../service/room.service";
import {Room} from "../model/room.model";
import {SubjectService} from "../service/subject.service";
import {Subject} from "../model/subject.model";
@Component({
  selector: 'app-group-update',
  standalone: true,
  templateUrl: './group-update.component.html',
  imports: [FormsModule, GroupScheduleEditorComponent],
  providers: [ GroupService, TeacherService, RoomService,SubjectService ],
  styleUrls: ['./group-update.component.css']
})
export class GroupUpdateComponent implements OnInit {
  id: number = 0;
  group: Group = new Group();
  teachers: Teacher[] | undefined;

  subjects:Subject[]| undefined;
  rooms:Room[]| undefined;
  setGroupId(groupId: number){
    this.id = groupId;
    this.groupService.getGroupById(groupId).subscribe({
      next: (data) => {
        this.group = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  constructor(
    private groupService: GroupService,
    private teacherService: TeacherService,
    private roomsService: RoomService,
    private subjectsService: SubjectService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
    this.getRooms();
    this.getSubjects();
    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data=> this.setGroupId( +data));
  }

  private getTeachers() {
    this.teacherService.getTeacherList().subscribe(data => {
      this.teachers = data;
    });
  }
  private getSubjects() {
    this.subjectsService.getSubjectList().subscribe(data => {
      this.subjects = data;
    });
  }
  private getRooms() {
    this.roomsService.getRoomList().subscribe(data => {
      this.rooms = data;
    });
  }
  updateGroup(closeEditor: boolean) {
    this.groupService.updateGroup(this.id, this.group).subscribe({
      next: (data) => {
        console.log(data);
        if (closeEditor) this.redirectToGroupList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  createGroup(closeEditor: boolean){
    this.groupService.createGroup(this.group).subscribe({
      next: (data) => {
        console.log(data);
        this.group = data;
        this.id = data.id;
        if (closeEditor)  this.redirectToGroupList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onSubmit(closeEditor: boolean) {
    console.log(this.group);
    if (this.id > 0)
      this.updateGroup(closeEditor);
    else
      this.createGroup(closeEditor);
  }

  redirectToGroupList(){
    this.router.navigate(['groups']);
  }
}
