import { Injectable } from '@angular/core';
import { TEAMS, SEASON_SCHEDULE } from './Schedule-data';
@Injectable()
export class SoccerService {
    public  getTeamsAsync() {
            return Promise.resolve(TEAMS);
    }

    public  getTeamsSync() {
            return TEAMS;
    }

    public  getScheduleAsync() {
            return Promise.resolve(SEASON_SCHEDULE);
    }

    public  getScheduleSync() {
            return SEASON_SCHEDULE;
    }

    private ComputeRankings() {

    }
}

