import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SoccerService} from './Services/SoccerService';
import { Title } from '@angular/platform-browser';
import { iTeam } from './Interfaces/Team';
import { iSchedule } from './Interfaces/Schedule';
import { iRanking } from './Interfaces/ranking';

@Component({
    encapsulation: ViewEncapsulation.Native,
    templateUrl: './Views/Standings.html',
    styles: [`
            h3 {text-align:center;color:navy;font-size:xlarge;margin:0px;}
            table {
            width:92%;margin:1em auto;font-size:large;
            font-family:"Comic Sans MS", cursive, sans-serif; }
            th { text-decoration:underline;}
    ` ]    
})
export class AppStandings {
    public LeagueName: string;
    public UsingAsync: boolean = false;
    public MySchedule: iSchedule[];
    public Standings: iRanking[];
    public constructor(private _title: Title, private _SoccerService: SoccerService ) {
        this._title.setTitle("Scores and Points");
        this.getSchedule();
        this.ComputeRankings();
    }  
    getSchedule() {
        if(this.UsingAsync) {
            let gottenSchedules = this._SoccerService.getScheduleAsync();
            gottenSchedules.then((Schedule:iSchedule[]) => this.MySchedule = Schedule);
        }
        else {
            this.MySchedule = this._SoccerService.getScheduleSync();
        }
    }
    ComputeRankings() {
        var curDate: Date = new Date();
        var TeamAt: number;
        this.Standings = []; // Empty the array
        this.MySchedule.forEach(element => {
        // If game has already been played
        if (element.PlayingDate < curDate && element.HomeScore>=0) {
            TeamAt = this.FindTeam(element.HomeTeam);
            if (TeamAt<0)
            {
                this.Standings.push(
                { TeamName: element.HomeTeam,
                GamesPlayed:0,Wins:0,Ties:0,
                GoalsFor:0,GoalsAgainst:0 } )
                TeamAt = this.Standings.length-1;
            }
            this.UpdCurrentRow(element,TeamAt,"H");
            TeamAt = this.FindTeam(element.AwayTeam);
            if (TeamAt<0)
            {
                this.Standings.push(
                { TeamName: element.AwayTeam,
                GamesPlayed:0,Wins:0,Ties:0,
                GoalsFor:0,GoalsAgainst:0 } )
                TeamAt = this.Standings.length-1;
            }
            this.UpdCurrentRow(element,TeamAt,"A");
        }
      });

      // Sort standings
        this.Standings.sort((left, right): number =>
        {
        if (left.Wins*3+left.Ties<right.Wins*3+right.Ties) return 1;
        if (left.Wins*3+left.Ties>right.Wins*3+right.Ties) return -1;
        // Else, then are tied, typically we'd add addition logic to break
        if (left.GoalsFor<right.GoalsFor) return 1;
        if (left.GoalsFor>right.GoalsFor) return -1;
        // Finally, return zero if still tied.
        return 0;
        })
    }

    private UpdCurrentRow(element:iSchedule,TeamAt:number,HomeAway:string) {
            this.Standings[TeamAt].GamesPlayed ++;
            if (HomeAway=="H") {
                this.Standings[TeamAt].GoalsFor += element.HomeScore;
                this.Standings[TeamAt].GoalsAgainst += element.AwayScore;
                // Win
                if (element.HomeScore>element.AwayScore)
                {
                    this.Standings[TeamAt].Wins++;
                }
            }
            if (HomeAway=="A") {
                this.Standings[TeamAt].GoalsFor += element.AwayScore;
                this.Standings[TeamAt].GoalsAgainst += element.HomeScore;
                if (element.AwayScore>element.HomeScore)
                {
                    this.Standings[TeamAt].Wins++;
                }
            }
            if (element.HomeScore==element.AwayScore)
            {
                this.Standings[TeamAt].Ties++;
            }
    }

    // Find the team or -1
    private FindTeam(TeamName:string) : number {
        var FoundAt: number = -1;
        for (var _x=0;_x < this.Standings.length;_x++)
        {
            if (this.Standings[_x].TeamName == TeamName) {
                return _x;
            }
        }
        return FoundAt;
    }
}