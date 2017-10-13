import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SoccerService} from './Services/SoccerService';
import { Title } from '@angular/platform-browser';
import { iTeam } from './Interfaces/Team';

@Component({
    encapsulation: ViewEncapsulation.Native,
    template: '<h3>Admin Component</h3>'
})
export class AppAdmin {
    public UsingAsync : boolean = false;
    public MyTeams : iTeam[];
    public constructor(private _title: Title, private _SoccerService: SoccerService ) {
        this._title.setTitle("Admin Dashboard");
        this.getTeams();
    }
    public getTeams() {
        if(this.UsingAsync) {
            let gottenTeams = this._SoccerService.getTeamsAsync();
            gottenTeams.then((Teams:iTeam[]) => this.MyTeams = Teams);
        }
        else {
            this.MyTeams = this._SoccerService.getTeamsSync();
        }
    }
}