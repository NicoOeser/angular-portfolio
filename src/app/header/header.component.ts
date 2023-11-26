// Import-Anweisungen für Angular-Module
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

// Deklaration der Komponente mit Selector, Template und Styles
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  isHamburgerActive: boolean = false;

  constructor(private router: Router, private sharedService: SharedService) {
    this.sharedService.isHamburgerActive$.subscribe((isActive) => {
      this.isHamburgerActive = isActive;
    });
  }

  toggleNavigation() {
    this.sharedService.toggleHamburgerState();
    if (this.isHamburgerActive) {
      console.log('Hamburger is active');
      this.router.navigate(['navigation']);
    } else {
      console.log('Hamburger is not active');
      this.router.navigate(['']);
    }
  }
}