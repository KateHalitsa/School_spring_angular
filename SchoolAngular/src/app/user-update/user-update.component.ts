import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-update',
  standalone: true,
  templateUrl: './user-update.component.html',
  imports: [ FormsModule ],
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  id!: number;
  user: User = new User();
  @Input() showButtons = true;
  @Input() set userId(usrId: number){
    this.id = usrId;
    this.userService.getUserById(usrId).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  constructor(private userService: UserService,
    private route: ActivatedRoute, private router: Router) { }

  private getUserById() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  ngOnInit(): void {
   // this.getUserById();
  }
  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe({
      next: (data) => {
        console.log(data);
        //this.redirectToUserList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  redirectToUserList() {
    this.router.navigate(['/users']);
  }
  onSubmit() {
    console.log(this.user);
    this.updateUser();
  }
}
