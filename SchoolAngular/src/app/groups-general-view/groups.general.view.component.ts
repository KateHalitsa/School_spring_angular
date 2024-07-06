import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from "../service/group.service";
import {GroupGeneralView} from "../model/group.general.view.model";

@Component({
  selector: 'groups-general-view-app',
  standalone: true,
  templateUrl: './groups.general.view.component.html',
  imports: [],
  providers: [GroupService]
})
export class GroupsGeneralViewComponent implements OnInit {

  groups: GroupGeneralView[] | undefined;

  constructor(private groupService: GroupService, private router: Router) {
  }

  ngOnInit(): void {
    this.getGroups();
  }

  private getGroups() {
    this.groupService.generalView().subscribe(data => {
      this.groups = data;
    });
  }

  updateGroup(id: number) {
    this.router.navigate(['groups/group-update', id]);
  }

  createGroup(){
    this.updateGroup(0);
  }

  deleteGroup(id: number) {
    this.groupService.deleteGroup(id).subscribe(data => {
      console.log(data);
      this.getGroups();
    });
  }
}

