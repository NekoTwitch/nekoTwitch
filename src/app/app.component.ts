import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubjectsService} from './widgets/services/behavior-subjects/behavior-subjects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _translate: TranslateService, private _behavior: BehaviorSubjectsService) {
    const savedLang = localStorage.getItem('lang');
    this._translate.use('en');
    if (savedLang === 'fr' || savedLang === 'en') {
      console.log(savedLang);
      _behavior.updateLanguage(savedLang);
    }
  }
}
