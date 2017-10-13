import { Routes } from '@angular/router';
import { AppStandings } from './app.standings';
import { AppScoring } from './app.scoring';
import { AppAdmin } from './app.admin';
import { NotFoundComponent } from './app.notfound';

export const appRoutes: Routes = [
    { path: 'Standings', component: AppStandings },
    { path: 'Scoring', component: AppScoring },
    { path: '**', component: NotFoundComponent }
];

