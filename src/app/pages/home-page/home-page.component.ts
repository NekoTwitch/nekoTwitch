import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements AfterViewInit {
  animDone: boolean = false;

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animDone = true;
    }, 250);
  }
}

