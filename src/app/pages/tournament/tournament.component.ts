import {Component, OnInit} from '@angular/core';
import {BehaviorSubjectsService} from '../../widgets/behavior-subjects/behavior-subjects.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})

export class TournamentComponent implements OnInit {

  constructor(private _BehaviorSubjectsService: BehaviorSubjectsService) {
  }

  ngOnInit() {
    this._BehaviorSubjectsService.updateMenuSelection('tournament');
  }
}
