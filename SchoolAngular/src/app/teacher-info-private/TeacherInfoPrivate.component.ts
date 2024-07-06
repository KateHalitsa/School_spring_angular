import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../service/storage.service";
import {TeacherService} from "../service/teacher.service";
import {TeacherUpdateComponent} from "../teacher-update/teacher-update.component";

@Component({
  selector: "teacher-info-private-app",
  standalone: true,
  imports: [TeacherUpdateComponent],
  providers: [TeacherService],
  template:
    `<h6 class='text-center p-1' style="background-color: #f2f5ff;">Личная информация учителя</h6>
     <app-teacher-update [teacherId]='currentTeacherId' ></app-teacher-update>`
})
export class TeacherInfoPrivateComponent  implements OnInit {
public currentTeacherId = 0;
  constructor(private userService: TeacherService,
    private route: ActivatedRoute, private router: Router,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentTeacherId = this.storageService.getUser().teacherId;
  }
}
