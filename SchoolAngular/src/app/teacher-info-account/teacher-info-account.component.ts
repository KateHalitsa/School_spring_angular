import {Component, OnInit} from "@angular/core";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../service/storage.service";
import {UserUpdateComponent} from "../user-update/user-update.component";

@Component({
  selector: "teacher-info-account-app",
  standalone: true,
  imports: [UserUpdateComponent],
  providers: [UserService],
  templateUrl: './teacher-info-account.component.html',
  styleUrl: './teacher-info-account.component.css'
})

export class TeacherInfoAccountComponent implements OnInit {
  public currentUserId = 0;
  constructor(private userService: UserService,
              private route: ActivatedRoute, private router: Router,
              private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUserId = this.storageService.getUser().id;
  }
}

/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-info-account',
  standalone: true,
  imports: [],
})
export class TeacherInfoAccountComponent {

}

 */
