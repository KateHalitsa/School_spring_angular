import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {TeacherInfoComponent} from "./teacher-info/teacher-info.component";
import {TeacherInfoPrivateComponent} from "./teacher-info-private/TeacherInfoPrivate.component";
import {TeacherInfoAccountComponent} from "./teacher-info-account/teacher-info-account.component";
import {TeacherInfoScheduleComponent} from "./teacher-info-schedule/teacher-info-schedule.component";
import {StudentInfoComponent} from "./student-info/student-info.component";
import {StudentInfoPrivateComponent} from "./student-info-private/student-info-private.component";
import {StudentInfoAccountComponent} from "./student-info-account/student-info-account.component";
import {StudentInfoScheduleComponent} from "./student-info-schedule/student-info-schedule.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {StudentsComponent} from "./students/students.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {sessionGuard} from "./service/session.guard";
import {AuthGuardService as AuthGuard} from "./service/auth-guard.service";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AccessRight} from "./service/storage.service";
import {TeacherRegistrationComponent} from "./teacher-registration/teacher-registration.component";
import {StudentRegistrationComponent} from "./student-registration/student-registration.component";
import {GroupsGeneralViewComponent} from "./groups-general-view/groups.general.view.component";
import {GroupUpdateComponent} from "./group-update/group-update.component";
import {StudentInfoGroupsComponent} from "./student-info-groups/student-info-groups.component";
import {AttendanceComponent} from "./attendance/attendance.component";
import {SubjectUpdateComponent} from "./subject-update/subject-update.component";
import {RoomUpdateComponent} from "./room-update/room-update.component";
import {TeacherInfoSubjectsComponent} from "./teacher-info-subjects/teacher-info-subjects.component";

const teacherInfoRoutes: Routes = [
  { path: "", redirectTo: "private", pathMatch: "full"},
  { path: "private", component: TeacherInfoPrivateComponent},
  { path: "account", component: TeacherInfoAccountComponent},
  { path: "subjects", component: TeacherInfoSubjectsComponent},
  { path: "schedule", component: TeacherInfoScheduleComponent},
  { path: "schedule/attendance/:id", component: AttendanceComponent}
];

const studentInfoRoutes: Routes = [
  { path: "", redirectTo: "private", pathMatch: "full"},
  { path: "private", component: StudentInfoPrivateComponent},
  { path: "account", component: StudentInfoAccountComponent},
  { path: "groups", component: StudentInfoGroupsComponent},
  { path: "schedule", component: StudentInfoScheduleComponent},
];

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'teacher-registration', component: TeacherRegistrationComponent },
  { path: 'student-registration', component: StudentRegistrationComponent },
  { path: "teacherInfo", component: TeacherInfoComponent, children: teacherInfoRoutes, canActivate: [AuthGuard], data: {access: [AccessRight.Teacher]}},
  { path: "studentInfo", component: StudentInfoComponent, children: studentInfoRoutes, canActivate: [AuthGuard], data: {access: [AccessRight.Student]}},
  { path: "subjects", component: SubjectsComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "teachers", component: TeachersComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "students", component: StudentsComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "subjects/subject-update/:id", component: SubjectUpdateComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "rooms", component: RoomsComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "rooms/room-update/:id", component: RoomUpdateComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "groups", component: GroupsGeneralViewComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "groups/group-update/:id", component: GroupUpdateComponent, canActivate: [AuthGuard], data: {access: [AccessRight.Admin]}},
  { path: "**", component: NotFoundComponent }
];
