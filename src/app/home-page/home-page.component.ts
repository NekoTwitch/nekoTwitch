import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor() {
    document.write("<script src='https://embed.twitch.tv/embed/v1.js'></script><script type='text/javascript'>new Twitch.Embed('twitch-embed', {width: '100%', height: '100%', channel: 'monstercat'});</script>'")
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log($('body'));
  }

}
