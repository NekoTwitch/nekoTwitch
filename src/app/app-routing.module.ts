import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TournamentComponent} from './pages/tournament/tournament.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stream',
    pathMatch: 'full'
  },
  {
    path: 'stream',
    component: HomePageComponent,
  },
  {
    path: 'tournament',
    component: TournamentComponent,
  },
  {
    path: '**',
    redirectTo: 'stream'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
