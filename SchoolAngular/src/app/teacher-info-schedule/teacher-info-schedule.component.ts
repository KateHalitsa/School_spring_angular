import {Component, Input, OnInit} from "@angular/core";
import {StorageService} from "../service/storage.service";
import {GroupScheduleService} from "../service/group.schedule.service";
import {GroupScheduleView} from "../model/group.schedule.view.model";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: "teacher-info-schedule-app",
  standalone: true,
  templateUrl: './teacher-info-schedule.component.html',
  styleUrl: './teacher-info-schedule.component.css',
  imports: [DatePipe, RouterLink],
  providers: [GroupScheduleService]
})
export class TeacherInfoScheduleComponent implements OnInit{

  currentTeacherId = 0;
  schedules: GroupScheduleView[] | undefined;

  constructor(
    private storageService: StorageService,
    private groupScheduleService: GroupScheduleService) {
  }

  ngOnInit(): void {
    this.currentTeacherId = this.storageService.getUser().teacherId;
    this.loadTeacherSchedule();
  }

  loadTeacherSchedule(){
    let teacherId = this.currentTeacherId;
    if (teacherId > 0) {
      this.groupScheduleService.findGroupScheduleViewListByTeacherId(teacherId).subscribe({
        next: (data) => {
          this.schedules = data;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

}
