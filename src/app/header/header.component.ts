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

  /**
  * Erstellt eine neue Instanz der HeaderComponent.
  * @param router - Der Angular Router für die Navigation.
  * @param sharedService - Der gemeinsame Service für den Zugriff auf den Status des Hamburger-Menüs.
  */
  constructor(private router: Router, private sharedService: SharedService) {
    this.sharedService.isHamburgerActive$.subscribe((isActive) => {
      this.isHamburgerActive = isActive;
    });
  }

  /**
  * Toggle die Navigation und aktualisiert den Routing-Pfad basierend auf dem Hamburger-Status.
  */
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