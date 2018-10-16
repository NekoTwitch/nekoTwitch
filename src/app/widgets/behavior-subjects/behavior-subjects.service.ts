import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class BehaviorSubjectsService {
  public menuSelected = new BehaviorSubject<string>(null);

  constructor() {
  }

  updateMenuSelection(newValue) {
    this.menuSelected.next(newValue);
  }
}
