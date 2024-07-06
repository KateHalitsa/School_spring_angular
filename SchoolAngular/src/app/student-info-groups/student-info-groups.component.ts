import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {StudentGroupService} from "../service/student.group.service";
import {StudentGroup} from "../model/student.group.model";
import {NgTemplateOutlet, DatePipe} from "@angular/common";
import { FormsModule }   from "@angular/forms";
import {StorageService} from "../service/storage.service";
import {GroupGeneralView} from "../model/group.general.view.model";
import {GroupService} from "../service/group.service";

@Component({
  selector: 'app-groupschedule-editor',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    FormsModule,
    DatePipe
  ],
  providers: [StudentGroupService, StorageService, GroupService],
  templateUrl: './student-info-groups.component.html',
  styleUrl: './student-info-groups.component.css'
})
export class StudentInfoGroupsComponent implements OnInit {

  //типы шаблонов
  @ViewChild("readOnlyTemplate", {static: false}) readOnlyTemplate: TemplateRef<any>|null = null;
  @ViewChild("editTemplate", {static: false}) editTemplate: TemplateRef<any>|null = null;

  currentStudentId!: number;
  studentGroups: StudentGroup[]  = new Array<StudentGroup>();
  editedStudentGroup: StudentGroup = new StudentGroup(0, 0, 0);
  isNewRecord: boolean = false;
  statusMessage: string = "";
  groups: GroupGeneralView[] = [];

  constructor(
    private studentGroupService: StudentGroupService,
    private storageService: StorageService,
    private groupService: GroupService
  ) { }

  ngOnInit(): void {
    this.currentStudentId = this.storageService.getUser().studentId;
    this.getGroups();
  }

  private getGroups() {
    this.groupService.generalView().subscribe(data => {
      this.groups = data;
      this.loadStudentGroups();
    });
  }

  notUsedGroups(): GroupGeneralView[]{
    return this.groups.filter(a => !this.studentGroups.map(b=>b.groupId).includes(a.id))
  }

  getGroupDescription(group: GroupGeneralView): string{
     return  `${group.name} (на ${group.schoolYear} год; предмет ${group.subjectName}; учитель ${group.teacherName})`;
  }

  getGroupDescriptionById(groupId: number): string {
    let group = this.groups.find((element) => element.id == groupId);
    return this.getGroupDescription(group as GroupGeneralView);

  }
  loadStudentGroups(){
    this.studentGroupService.findStudentGroupListForStudent(this.currentStudentId).subscribe({
      next: (data) => {
        this.studentGroups = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  // добавление пользователя
  addStudentGroup() {
    this.editedStudentGroup = new StudentGroup(0, this.currentStudentId, 0);
    this.studentGroups.push(this.editedStudentGroup);
    this.isNewRecord = true;
  }

  // редактирование пользователя
  editStudentGroup(studentGroup: StudentGroup) {
    this.editedStudentGroup = new StudentGroup(studentGroup.id, studentGroup.studentId, studentGroup.groupId);
  }
  // загружаем один из двух шаблонов
  loadTemplate(studentGroup: StudentGroup): TemplateRef<any>|null {
    if (this.editedStudentGroup && this.editedStudentGroup.id === studentGroup.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
  // сохраняем пользователя
  saveStudentGroup() {
    if (this.isNewRecord) {
      // добавляем пользователя
      this.studentGroupService.createStudentGroup(this.editedStudentGroup).subscribe(_ => {
        this.statusMessage = "Данные успешно добавлены",
          this.loadStudentGroups();
      });
      this.isNewRecord = false;
      this.editedStudentGroup = new StudentGroup(0, this.currentStudentId, 0);
    } else {
      // изменяем пользователя
      let schedule = this.editedStudentGroup;
      this.studentGroupService.updateStudentGroup(schedule.id, schedule).subscribe(_ => {
        this.statusMessage = "Данные успешно обновлены",
          this.loadStudentGroups();
      });
      this.editedStudentGroup = new StudentGroup(0, this.currentStudentId, 0);
    }
  }
  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.studentGroups.pop();
      this.isNewRecord = false;
    }
    this.editedStudentGroup = new StudentGroup(0, this.currentStudentId, 0);
  }
  // удаление пользователя
  deleteStudentGroup(studentGroup: StudentGroup) {
    this.studentGroupService.deleteStudentGroup(studentGroup.id).subscribe(_ => {
      this.statusMessage = "Данные успешно удалены",
        this.loadStudentGroups();
    });
  }

}

