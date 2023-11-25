// Import-Anweisungen für Angular-Module
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

// Deklaration der Komponente mit Selector, Template und Styles
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  burgerMenu: boolean = false;

  constructor(public menuService: MenuService) {}

  ngOnInit() {}

  toggleDisplayMenu() {
    this.menuService.MenuGlobal = !this.menuService.MenuGlobal
  }
}
