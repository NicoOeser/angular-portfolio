import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})

export class BurgerMenuComponent {

  constructor(public menuService: MenuService) {
  }

  goTo(id: string) {
    this.menuService.MenuGlobal = !this.menuService.MenuGlobal
    setTimeout(() => {
       window.location.href = id
    }, 1000);
   
  }

}
