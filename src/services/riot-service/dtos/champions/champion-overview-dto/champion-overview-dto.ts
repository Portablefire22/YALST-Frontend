export class ChampionOverviewDto {
  constructor(championName: string, championId: number, kills: number, deaths: number, assists: number, wins: number, losses: number, creepsScore: number, timePlayed: number) {
    this.championName = championName;
    this.championId = championId;
    this.kills = kills;
    this.deaths = deaths;
    this.assists = assists;
    this.wins = wins;
    this.losses = losses;
    this.creepsScore = creepsScore;
    this.timePlayed = timePlayed;
  }
  championName: string;
  championId: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;
  creepsScore: number;
  timePlayed: number;
}
