import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { TournamentComponent } from '../tournament/tournament.component'

const routes: Routes = [
       {
           path: '',
           component: HomePageComponent,
       },
       {
         path: 'tournament',
         component: TournamentComponent,
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
export class AppRoutingModule { }
