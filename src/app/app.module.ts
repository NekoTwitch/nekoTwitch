import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HeadNavComponent } from './head-nav/head-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TournamentComponent,
    HeadNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
