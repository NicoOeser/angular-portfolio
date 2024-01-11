import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  showContact: boolean = true;

  constructor(private router: Router, private translate: TranslateService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showContact = !(event.url.includes('/legal-notice') || event.url.includes('/privacy-policy'));
      }
    });
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
