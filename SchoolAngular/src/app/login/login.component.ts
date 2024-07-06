import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthenticationService} from "../service/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StorageService} from "../service/storage.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  isLoginFailed = false
  errorMessage = ''

  constructor(private router: Router,
              private loginService: AuthenticationService,
              private storageService: StorageService) { }

  ngOnInit() {
  }

  checkLogin() {

    this.loginService.login(this.username, this.password).subscribe({
      next: data => {
        if(data != null){
          this.storageService.saveUser(data);
          this.isLoginFailed = false;
          this.router.navigate(['']);
        }
        else
        {
          this.errorMessage = 'Пользователь или пароль не верны';
          this.isLoginFailed = true;
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });

  }


}
