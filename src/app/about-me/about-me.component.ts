import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private translate: TranslateService) {}

  getTranslatedText(key: string): string {
    let translation = this.translate.instant(key);
    return translation !== key ? translation : null;
  }
}
