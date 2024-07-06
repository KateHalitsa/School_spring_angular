import {Component, OnInit} from "@angular/core";
import {StudentService} from "../service/student.service";
import {StudentUpdateComponent} from "../student-update/student-update.component";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../service/storage.service";

@Component({
  selector: "student-info-private-app",
  standalone: true,
  imports: [StudentUpdateComponent],
  providers: [StudentService],
  templateUrl: './student-info-private.component.html',
  styleUrl: './student-info-private.component.css'
})

export class StudentInfoPrivateComponent implements OnInit {
  public currentStudentId = 0;
  constructor(private studentService: StudentService,
              private route: ActivatedRoute, private router: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentStudentId = this.storageService.getUser().studentId;
  }
}
