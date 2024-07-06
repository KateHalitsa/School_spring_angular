import { Component} from "@angular/core";
import {RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';

@Component({
  selector: "teacher-info-app",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './teacher-info.component.html',
  styleUrl: './teacher-info.component.css'
})
export class TeacherInfoComponent {

}


