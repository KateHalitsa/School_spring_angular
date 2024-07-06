
import { Component} from "@angular/core";
import {RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';

@Component({
  selector: "student-info-app",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent { }
