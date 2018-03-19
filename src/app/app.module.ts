import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { ScriptHackComponent } from './widgets/script-hack/script-hack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TournamentComponent,
    HeadNavComponent,
    ScriptHackComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
