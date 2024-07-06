import {Component, OnInit} from "@angular/core";
import {UserUpdateComponent} from "../user-update/user-update.component";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../service/storage.service";

@Component({
  selector: "student-info-account-app",
  standalone: true,
  imports: [UserUpdateComponent],
  providers: [UserService],
  templateUrl: './student-info-account.component.html',
  styleUrl: './student-info-account.component.css'
})

export class StudentInfoAccountComponent implements OnInit {
  public currentUserId = 0;
  constructor(private userService: UserService,
              private route: ActivatedRoute, private router: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUserId = this.storageService.getUser().id;
  }
}
