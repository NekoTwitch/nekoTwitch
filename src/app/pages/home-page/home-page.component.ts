import {Component, OnInit} from '@angular/core';
import {BehaviorSubjectsService} from '../../widgets/behavior-subjects/behavior-subjects.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private _BehaviorSubjectsService: BehaviorSubjectsService) {
  }

  ngOnInit() {
    this._BehaviorSubjectsService.updateMenuSelection('home');
  }
}
