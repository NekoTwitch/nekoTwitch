import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class BehaviorSubjectsService {
  public menuSelected = new BehaviorSubject<string>(null);
  public language = new BehaviorSubject<string>('fr');

  constructor(private _translate: TranslateService) {
  }

  updateMenuSelection(newValue) {
    this.menuSelected.next(newValue);
  }

  updateLanguage(newValue) {
    this.language.next(newValue);
    this._translate.use(newValue);
    localStorage.setItem('lang', newValue);
  }
}
