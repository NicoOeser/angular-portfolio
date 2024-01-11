import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})

export class BurgerMenuComponent {

  constructor(private router: Router, private sharedService: SharedService, private translate: TranslateService) { }

  getTranslatedText(key: string): string {
    let translation = this.translate.instant(key);
    return translation !== key ? translation : null;
  }

  toggleHamburger() {
    this.sharedService.toggleHamburgerState();
  }

}