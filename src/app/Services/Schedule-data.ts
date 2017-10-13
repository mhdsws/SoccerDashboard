import {iSchedule} from "../interfaces/schedule";
import {iTeam} from "../interfaces/team";
export const SEASON_SCHEDULE: iSchedule[] =
 [ 
 {id:1,PlayingDate:new Date(2016,8,23),
 HomeTeam:'Old Men United',AwayTeam:'Kellie Kickers',
 HomeScore:4,AwayScore:3,RefName:'Joanne',notes:'Overtime game'},
 {id:2,PlayingDate:new Date(2016,8,26),
 HomeTeam:'Torn Achilles',AwayTeam:'422 Nomads',
 HomeScore:7,AwayScore:2,RefName:'Colin',notes:''},
 {id:3,PlayingDate:new Date(2016,8,28),
 HomeTeam:'Blue Devils',AwayTeam:'FC Dauntlesss',
 HomeScore:4,AwayScore:6,RefName:'Gene',notes:''},
 ];
export const TEAMS: iTeam[] =
 [
 { id:1,name:"Old Menu United",type:"Over 30"},
 { id:2,name:"422 Nomads",type:"Over 30"},
 { id:3,name:"FC Dauntless",type:"Over 30"},
 { id:4,name:"Kellie's Kickers",type:"Over 30"},
 { id:5,name:"Blue Devils",type:"Over 30"},
 { id:6,name:"Torn Achilles",type:"Over 30"}
 ];