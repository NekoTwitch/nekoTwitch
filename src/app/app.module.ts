import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TournamentComponent} from './pages/tournament/tournament.component';
import {HeadNavComponent} from './pages/head-nav/head-nav.component';
import {ScriptHackComponent} from './widgets/script-hack/script-hack.component';
import {BehaviorSubjectsService} from './widgets/behavior-subjects/behavior-subjects.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TournamentComponent,
    HeadNavComponent,
    ScriptHackComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    BehaviorSubjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
