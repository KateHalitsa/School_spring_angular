import {AuthenticationService } from "./service/auth.service";
import {AccessRight} from "./service/storage.service";

export class MenuItem {
  constructor(public name: string, public url : string, public accessRights: AccessRight[]){
  }
  isVisible(authService: AuthenticationService)
  {
    return authService.canAccess(this.accessRights);
  }
}

export class MainMenu{
  public items: Array<MenuItem> =
    [
      new MenuItem('Главная', '/home',[AccessRight.Guest]),
      new MenuItem('Предметы', '/subjects', [AccessRight.Admin]),
      new MenuItem('Учителя', '/teachers', [AccessRight.Admin]),
      new MenuItem('Кабинеты школы', '/rooms', [AccessRight.Admin]),
      new MenuItem('Ученики', '/students', [AccessRight.Admin]),
      new MenuItem('Группы', '/groups', [AccessRight.Admin]),
      new MenuItem('Кабинет учителя', '/teacherInfo', [AccessRight.Teacher]),
      new MenuItem('Кабинет ученика', '/studentInfo', [AccessRight.Student]),
      new MenuItem('О школе', '/about',[AccessRight.Guest]),
    ]
}
