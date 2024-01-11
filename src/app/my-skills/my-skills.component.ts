import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  constructor(private translate: TranslateService) {}

  getTranslatedText(key: string): string {
    let translation = this.translate.instant(key);
    return translation !== key ? translation : null;
  }
}

