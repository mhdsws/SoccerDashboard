import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppStandings } from './app.standings';
import { AppScoring } from './app.scoring';
import { AppAdmin } from './app.admin';
import { appRoutes } from './app.route';
import { NotFoundComponent } from './app.notfound';
import { SoccerService } from './Services/SoccerService';
@NgModule({
  declarations: [
    AppComponent, AppStandings, AppScoring, AppAdmin, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Title, SoccerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
