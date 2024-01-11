import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private translate: TranslateService) {}

  getTranslatedText(key: string): string {
    let translation = this.translate.instant(key);
    return translation !== key ? translation : null;
  }
}

