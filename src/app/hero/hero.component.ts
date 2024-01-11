import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private translate: TranslateService) {}

  getTranslatedText(key: string): string {
    let translation = this.translate.instant(key);
    return translation !== key ? translation : null;
  }
}
