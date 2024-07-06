import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const sessionGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log(route.component);    // можно получить различную информацию о маршрутах, параметрах и ит.д.
  return confirm("Вы уверены, что хотите перейти?");
};
