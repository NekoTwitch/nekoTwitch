import {Component, OnInit} from '@angular/core';
import {BehaviorSubjectsService} from '../../widgets/services/behavior-subjects/behavior-subjects.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private _Behavior: BehaviorSubjectsService) {
  }

  ngOnInit() {
    this._Behavior.updateMenuSelection('home');
  }
}
