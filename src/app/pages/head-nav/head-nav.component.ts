import {BehaviorSubjectsService} from '../../widgets/services/behavior-subjects/behavior-subjects.service';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss']
})
export class HeadNavComponent implements OnInit, OnDestroy {
  public selected: string = null;
  public showTranslate: boolean = false;

  constructor(private _Behavior: BehaviorSubjectsService) {
  }

  ngOnInit() {
    this._Behavior.menuSelected.subscribe(
      value => this.selected = value
    );
  }

  ngOnDestroy() {
    this._Behavior.menuSelected.unsubscribe();
  }

  selectLang(arg: string) {
    this._Behavior.updateLanguage(arg);
  }
}
