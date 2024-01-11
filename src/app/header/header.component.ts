// Import-Anweisungen für Angular-Module
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { TranslateService } from '@ngx-translate/core';

// Deklaration der Komponente mit Selector, Template und Styles
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isHamburgerActive: boolean = false;

  constructor(private router: Router, private sharedService: SharedService, private translate: TranslateService) {
    this.sharedService.isHamburgerActive$.subscribe((isActive) => {
      this.isHamburgerActive = isActive;
    });
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  toggleNavigation() {
    this.sharedService.toggleHamburgerState();
    if (this.isHamburgerActive) {
      this.router.navigate(['navigation']);
    } else {
      this.router.navigate(['']);
    }
  }
}