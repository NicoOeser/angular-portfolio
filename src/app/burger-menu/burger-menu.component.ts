import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})

export class BurgerMenuComponent {

  constructor( private router: Router, private sharedService: SharedService) {}

  toggleHamburger(){
    this.sharedService.toggleHamburgerState();
  }

}