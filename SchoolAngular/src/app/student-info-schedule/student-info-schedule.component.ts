import { Component, OnInit} from "@angular/core";
import {GroupScheduleService} from "../service/group.schedule.service";
import {StorageService} from "../service/storage.service";
import {GroupScheduleStudentView} from "../model/group.schedule.student.view.model";
import {DatePipe} from "@angular/common";


@Component({
  selector: "student-info-schedule-app",
  standalone: true,
  templateUrl: './student-info-schedule.component.html',
  styleUrl: './student-info-schedule.component.css',
  imports: [ DatePipe ],
  providers: [GroupScheduleService]
})

export class StudentInfoScheduleComponent implements OnInit{

  currentStudentId = 0;
  schedules: GroupScheduleStudentView[] | undefined;

  constructor(
    private storageService: StorageService,
    private groupScheduleService: GroupScheduleService) {
  }

  ngOnInit(): void {
    this.currentStudentId = this.storageService.getUser().studentId;
    this.loadStudentSchedule();
  }

  loadStudentSchedule(){
    let studentId = this.currentStudentId;
    if (studentId > 0) {
      this.groupScheduleService.findGroupScheduleViewListByStudentId(studentId).subscribe({
        next: (data) => {
          this.schedules = data;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  public isObsolete(schedules: GroupScheduleStudentView): boolean
  {
    return new Date(schedules.startTime).getTime() < Date.now();
  }

}


