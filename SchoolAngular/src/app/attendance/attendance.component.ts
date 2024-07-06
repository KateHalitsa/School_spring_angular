import {Component, OnInit} from '@angular/core';
import {switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AttendanceService} from "../service/attendance.service";
import {AttendanceView} from "../model/attendance.view.model";
import {FormsModule} from "@angular/forms";
import {GroupScheduleService} from "../service/group.schedule.service";
import {GroupScheduleView} from "../model/group.schedule.view.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  providers: [AttendanceService, GroupScheduleService],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})

export class AttendanceComponent implements OnInit {

  public groupScheduleId = 0;
  public groupScheduleView: GroupScheduleView = new GroupScheduleView();
  public attendances: AttendanceView[] = new Array<AttendanceView>;

  constructor(
    private attendanceService: AttendanceService,
    private groupScheduleService: GroupScheduleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll("id"))
    )
      .subscribe(data=> this.setGroupScheduleId( +data));
  }

  setGroupScheduleId(id: number){
    if(id > 0) {
      this.groupScheduleId = id;
      this.loadGroupScheduleView();
      this.loadAttendances();
    }
  }

  loadAttendances(){
    this.attendanceService.findForGroupSchedule(this.groupScheduleId).subscribe({
      next: (data) => {
        this.attendances = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  loadGroupScheduleView(){
    this.groupScheduleService.findGroupScheduleViewById(this.groupScheduleId).subscribe({
      next: (data) => {
        this.groupScheduleView = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }


  onSubmit(closeEditor: boolean) {
    console.log(this.attendances);
    this.updateAttendances(closeEditor);
  }

  updateAttendances(closeEditor: boolean){

    this.attendanceService.updateAttendances(this.groupScheduleId, this.attendances).subscribe({
      next: (data) => {
        console.log(data);
        this.attendances = data;
        if (closeEditor) this.redirectToTeacherInfoSchedule();
      },
      error: (e) => {
        console.log(e);
      }
    });

  }

  redirectToTeacherInfoSchedule(){
    this.router.navigate(['teacherInfo/schedule']);
  }

}
