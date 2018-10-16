import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubjectsService} from '../../widgets/behavior-subjects/behavior-subjects.service';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss']
})
export class HeadNavComponent implements OnInit, OnDestroy {
  public selected: string = null;

  constructor(private _BehaviorSubjectsService: BehaviorSubjectsService) {
  }

  ngOnInit() {
    this._BehaviorSubjectsService.menuSelected.subscribe(
      value => this.selected = value
    );
  }

  ngOnDestroy() {
    this._BehaviorSubjectsService.menuSelected.unsubscribe();
  }
}
