import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Components
import {AppComponent} from './app.component';
import {HeadNavComponent} from './pages/head-nav/head-nav.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TournamentComponent} from './pages/tournament/tournament.component';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// Scripts
import {ScriptHackComponent} from './widgets/script-hack/script-hack.component';

// Modules
import {AppRoutingModule} from './app-routing.module';

// Services
import {BehaviorSubjectsService} from './widgets/services/behavior-subjects/behavior-subjects.service';
import {SharedModule} from './shared-module';

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
    BrowserModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    SharedModule
  ],
  providers: [
    BehaviorSubjectsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
